import styles from "../styles/header.module.scss";
import Logo from "../public/logoBlue.png";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { login, logout } from "@/redux/features/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [online, setOnline] = useState(false);
  const router = useRouter();

  // to toggle menu on and off
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
  }, [dispatch, userName, router]);

  // sign out user
  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
          <Link href={online ? "/events" : "/login"}>Events</Link>
          <p className={online ? `${styles.name}` : `${styles.off}`}>
            {userName ? `hi, ${userName}` : ""}
          </p>
          <span
            className={online ? `${styles.logOut}` : `${styles.off}`}
            onClick={logOutUser}
          >
            Log Out
          </span>
        </nav>

        {showMenu ? (
          <nav className={styles.mobileNav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href={online ? "/event" : "/login"}>Events</Link>
            <p className={online ? `${styles.name}` : `${styles.off}`}>
              {userName ? `hi, ${userName}` : null}
            </p>
            {online ? (
              <span
                className={online ? `${styles.logOut}` : `${styles.off}`}
                onClick={logOutUser}
              >
                Log Out
              </span>
            ) : null}
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
