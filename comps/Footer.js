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
                <Link href="/register">Join StarTechOne</Link>
              </li>
              <li>
                <Link href="/register">Community</Link>
              </li>
              <li>
                <Link href="/register">Volunteer</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>make enquiries</h3>
            <ul>
              <li>
                <Link href="/register">meet the team</Link>
              </li>
              <li>
                <Link href="/register">FAQs</Link>
              </li>
              <li>
                <Link href="/register">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/register">terms and conditions</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>coonect with us</h3>
            <div className={styles.socials}>
              <Link href="/">
                <FaFacebookSquare className={styles.icon} />
              </Link>
              <Link href="/">
                <FaTwitterSquare className={styles.icon} />
              </Link>
              <Link href="/">
                <FaLinkedin className={styles.icon} />
              </Link>
              <Link href="/">
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
