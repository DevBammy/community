import styles from "../styles/header.module.scss";
import Logo from "../public/logoBlue.png";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // to toggle menu on and off
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoDiv}>
          <Link href="/">
            <Image src={Logo} alt="website logo" width={200} />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
        </nav>

        {showMenu ? (
          <nav className={styles.mobileNav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
          </nav>
        ) : (
          ""
        )}

        <GiHamburgerMenu className={styles.menu} onClick={toggleMenu} />
      </header>
    </>
  );
};

export default Header;
