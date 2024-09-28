import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const loginHandler = () => {
    router.push("/users");
  };
  return (
    <div className={styles.container}>
      <h3>Home page</h3>
      <Link href={`/courses`}>
        <p>Go to courses</p>
      </Link>
      <Link href={`/users`}>
        <p>Go to users</p>
      </Link>
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
}
