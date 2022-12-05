import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login.module.css";
export default function Login() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <Image
          className={styles.phone}
          src="/images/instapic.png"
          width={250}
          height={390}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.loginpanel}>
          <Image
            className={styles.logo}
            src="/images/instagram-logo.png"
            width={200}
            height={50}
          />
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              name="username"
              required
              placeholder="Phone number, username, or email"
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              required
              placeholder="Password"
            />
            <Link href="/Feed" className="link">
              <button
                type="submit"
                className="button"
                style={{
                  backgroundColor: "#b2dffc",
                  padding: "7px 0px",
                  border: "1px solid #dedede",
                  borderRadius: "5px",
                  width: "253px",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Log In
              </button>
            </Link>
            <div className={styles.divider}>
              <div className={styles.line}></div>
              <p>OR</p>
              <div class={styles.line}></div>
            </div>
            <a className={styles.fb}>Log in with Facebook</a>
            <a className={styles.forgot}>Forgot password?</a>
          </form>
        </div>
      </div>
    </section>
  );
}
