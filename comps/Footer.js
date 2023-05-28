import styles from "../styles/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logoMain.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Image src={Logo} alt="website logo" width={200} />
            <p>
              ...empowering tech innovators and driving positive change through
              technology
            </p>
          </div>
          <div className={styles.col}>
            <h3>get involved</h3>
            <ul>
              <li>
                <Link href="/">Join StarTechOne</Link>
              </li>
              <li>
                <Link href="/">Community</Link>
              </li>
              <li>
                <Link href="/">Volunteer</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>make enquiries</h3>
            <ul>
              <li>
                <Link href="/">meet the team</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">terms and conditions</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>coonect with us</h3>
            <div className={styles.socials}>
              <Link href="https://web.facebook.com/startechone" target="_blank">
                <FaFacebookSquare className={styles.icon} />
              </Link>
              <Link href="https://twitter.com/startechone" target="_blank">
                <FaTwitterSquare className={styles.icon} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/startechone-nigeria-limited/"
                target="_blank"
              >
                <FaLinkedin className={styles.icon} />
              </Link>
              <Link
                href="https://www.instagram.com/startechone_official/"
                target="_blank"
              >
                <FaInstagramSquare className={styles.icon} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
