import styles from "../styles/about.module.scss";
import Link from "next/link";
import Image from "next/image";
import BG from "../public/community.jpg";

const events = () => {
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
        <div className={styles.event}>
          <div className={styles.img}>
            <Image src={BG} alt="picture" width={300} height={300} />
          </div>
          <div className={styles.text}>
            <h2>Free Online Training</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et
              unde, facilis necessitatibus error, minima doloribus quaerat
              obcaecati voluptate quidem sapiente ducimus reprehenderit
              deleniti, perferendis neque eaque quam saepe ex.
            </p>
            <h4>June 12, 2023</h4>
            <Link href="/" className="btn">
              More Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default events;
