import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import Community from "../public/international.png";
import { FaRegEye } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import Pix1 from "../public/community.jpg";
import Pix2 from "../public/community2.jpg";
import Pix3 from "../public/community3.jpg";

export default function Home() {
  const form = useRef();
  const history = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2rrnqo",
        "template_q6vb5yp",
        form.current,
        "X3II_cjOhM_qQmE_b"
      )
      .then(
        (result) => {
          history.push("/");
          form.current.reset();
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1>StarTechOne Community</h1>
            <p>
              ...Empowering Tech Innovators{" "}
              <span>and Driving Positive Change</span>
            </p>
            <Link href="/register" className="btn">
              Join Us
            </Link>
          </div>

          <div className={styles.col}>
            <Image src={Community} alt="community image" width={500} />
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1>about us</h1>
            <p>
              StarTechOne Community is an online community of students,
              educators, professionals, and enthusiasts who share knowledge,
              ideas, and experiences about technology. Join a community that is
              passionate about learning and teaching about technology and its
              various applications.
            </p>
          </div>
          <div className={styles.col}>
            <div>
              <FaRegEye className={styles.icon} />
              <p>
                Our vision is to empower the next generation of tech innovators
                and entrepreneurs with cutting-edge skills and solutions that
                drive businesses forward and improve lives worldwide. Join.
              </p>
            </div>
            <div>
              <FiTarget className={styles.icon} />
              <p>
                Our mission is to empower the next generation of creatives and
                entrepreneurs with the skills and collaboration needed to
                succeed in the dynamic tech industry. Join StarTechOne Community
                and be a part of this mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.identify}>
        <div className={styles.content}>
          <h2>identify with us</h2>
          <p>
            By becoming a part of the StarTechOne family, you will gain access
            to a supportive network of members who actively collaborate,
            network, and share knowledge with one another. Identify with our
            core values and join our community today.
          </p>
        </div>
      </section>

      <section className={styles.join}>
        <div className={styles.row}>
          <div className="col">
            <Image src={Pix1} alt="picture one" width={500} />
          </div>
          <div className={styles.col}>
            <h2>join our community</h2>
            <p>
              StarTechOne Community Programs are designed to help individuals
              and businesses develop skills and knowledge in various areas of
              technology. Our programs are tailored to fit your needs, register
              today!
            </p>
            <Link href="/register" className="btn">
              Join Now
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <div className="col">
            <Image src={Pix2} alt="picture one" width={500} />
          </div>
          <div className={styles.col}>
            <h2>Attend StarTechOne Community Events</h2>
            <p>
              Participate in any of our online or offline events and
              initiatives, including bootcamps, live chats, webinars, Mentorship
              programs, and several more! Attend StarTechOne Community events,
              expand your knowledge, and network with like-minded individuals.
            </p>
            <Link href="/events" className="btn">
              attend an event
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <div className="col">
            <Image src={Pix3} alt="picture one" width={500} />
          </div>
          <div className={styles.col}>
            <h2>our story</h2>
            <p>
              Startech One Community is an online community where people with
              similar interests come together to share knowledge, ideas, and
              experiences related to technology. The community primarily focuses
              on areas such as web development, mobile application development,
              UI/UX, digital marketing, cloud computing, data science, data
              analysis, AI, and machine learning. Join StarTechOne Community and
              collaborate, network, and learn from one another.
            </p>
            <Link href="/events" className="btn">
              attend an event
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>contact us</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="full name" />
          <input type="email" placeholder="email" />
          <textarea placeholder="your message"></textarea>
          <button type="submit" className={styles.btn}>
            send message
          </button>
        </form>
      </section>
    </>
  );
}
