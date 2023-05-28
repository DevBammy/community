import styles from "../styles/login.module.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { auth } from "@/firebase/config";
import { signin } from "../redux/features/userSlice";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/events");
        dispatch(
          signin({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
          })
        );
      })
      .catch((error) => {});
  };
  return (
    <section className={styles.login}>
      <div className={styles.box}>
        <h4>Sign In with Gmail</h4>
        <p>Sign in to register for the event</p>
        <button className={styles.btn} onClick={googleSignIn}>
          Sign in with Gmail <FaGoogle />
        </button>
      </div>
    </section>
  );
};

export default Login;
