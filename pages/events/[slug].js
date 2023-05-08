import { client, urlFor } from "@/lib/client";
import React from "react";
import { FaClock } from "react-icons/fa";
import styles from "../../styles/about.module.scss";
import Link from "next/link";

const Slug = ({ data }) => {
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
          <Link href="/" className={`btn ${styles.btn}`}>
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
