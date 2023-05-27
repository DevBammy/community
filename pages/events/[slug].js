import { client, urlFor } from "@/lib/client";
import React from "react";
import { FaClock } from "react-icons/fa";
import styles from "../../styles/about.module.scss";
import Link from "next/link";
import { login, logout } from "@/redux/features/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";


const Slug = ({ data }) => {
  const dispatch = useDispatch();
  const [online, setOnline] = useState(false);
  const [userName, setUserName] = useState("");
 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toLowerCase() + u1.slice(1);
          setUserName(uName);
        } else {
          setUserName(user.displayName);
        }
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName ? user.displayName : userName,
          })
        );
        setOnline(true);
      } else {
        dispatch(logout());
        setUserName("");
        setOnline(false);
      }
    });
  }, [dispatch, userName]);

  return (
    <>
      <section className={styles.readMore}>
        <div className={styles.image}>
          <picture>
            <img
              src={data && urlFor(data.image)}
              alt="blog picture"
              className={styles.img}
            />
          </picture>
        </div>
        <div className={styles.text}>
          <h3>{data && data.title}</h3>
          <h3 className={styles.speaker}>Speaker: {data && data.speaker}</h3>
          <p className={styles.date}>
            <FaClock className={styles.icon} />
            <span>
              {data && data.date} | {data && data.time}
            </span>
          </p>
          <p className={styles.location}>Location: {data && data.location}</p>
          <p className={styles.details}>{data && data.body}</p>
          <Link
            href={online ? "https://forms.gle/KX3XoyeFUoaeTzbz9" : "/login"}
            className={`btn ${styles.btn}`} target="_blank"
          >
            Register
          </Link>
        </div>

        <h3 className={styles.lead}>Facilitators</h3>
        <div className={styles.speakerImg}>
          <picture>
            <img
              src={data && urlFor(data.image)}
              alt="blog picture"
              className={styles.img}
            />
          </picture>
        </div>
        <div className={styles.name}>
          <p>{data && data.speaker}</p>
          <p className={styles.port}>Data Scientist</p>
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "events"]{
    slug{
      current
    }
  }`;

  const data = await client.fetch(query);
  const paths = data.map((data) => ({
    params: {
      slug: data.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "events" && slug.current == '${slug}'][0]`;
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
};

export default Slug;
