import Link from "next/link";
import styles from "../styles/about.module.scss";
import Image from "next/image";
import Gab from "../public/gabriel.jpg";
import Jones from "../public/jones.jpg";
import BG from "../public/community.jpg";

const About = () => {
  return (
    <>
      <div className={styles.hero}>
        <Image src={BG} alt="background" width="100%" className={styles.bg} />
        <h1>our story</h1>
      </div>
      <section className={styles.lead}>
        <p>
          Startech One Community is an online community where people with
          similar interests come together to share knowledge, ideas, and
          experiences related to technology. The community primarily focuses on
          areas such as web development, mobile application development, UI/UX,
          digital marketing, cloud computing, data science, data analysis, AI,
          and machine learning. Join StarTechOne Community and collaborate,
          network, and learn from one another.
        </p>
        <Link
          href="https://startechone.com.ng/"
          target="_blank"
          className="btn"
        >
          Know us
        </Link>
      </section>

      <section className={styles.team}>
        <h3>meet the team</h3>
        <p>get to know the brillinat minds powering StarTechOne Community</p>

        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.img}>
              <Image src={Gab} alt="gabriel" width={300} />
            </div>
            <div className={styles.text}>
              <h4>Gabriel Yashim</h4>
              <p>Community Lead</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.img}>
              <Image src={Jones} alt="jones" width={300} />
            </div>
            <div className={styles.text}>
              <h4>Jones-ere Alaere</h4>
              <p>Community Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
