import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h3>Home page</h3>
      <Link href={`/courses`}>
        <p>Go to courses</p>
      </Link>
      <Link href={`/users`}>
        <p>Go to users</p>
      </Link>
    </div>
  );
}
