import styles from "../../styles/about.module.scss";
import Link from "next/link";
import Image from "next/image";
import BG from "../../public/community.jpg";
import { client, urlFor } from "../../lib/client";

const events = ({ data }) => {
  return (
    <>
      <div className={styles.hero}>
        <Image src={BG} alt="background" width="100%" className={styles.bg} />
        <h1>our events</h1>
      </div>
      <section className={styles.lead}>
        <p>
          Stay tuned for exciting community events organized by StarTechOne
          Community. Participate in online or offline events such as bootcamps,
          Fireside chats, webinars, and mentorship programs. Expand your
          knowledge, network with like-minded individuals, and collaborate with
          other tech enthusiasts.
        </p>
        <Link href="/" className="btn">
          Join Us
        </Link>
      </section>

      <section className={styles.events}>
        {data?.map((data) => (
          <div className={styles.event} key={data._id}>
            <div className={styles.image}>
              <picture>
                <img
                  src={urlFor(data.image)}
                  alt="event picture"
                  className={styles.img}
                />
              </picture>
            </div>
            <div className={styles.text}>
              <h2>{data.title}</h2>
              <p>{data.body}</p>
              <h4>Event date: {data.date}</h4>
              <Link href={`/events/${data.slug.current}`} className="btn">
                More Details
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "events"]';
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
};

export default events;
