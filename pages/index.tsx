import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import classNames from "classnames";
const cx = classNames.bind(styles);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Next Web App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h2 className={styles.title}>My Next Web App</h2>

      <div className={styles.grid}>
        <a href="/profile" className={styles.card}>
          <h2>Profile &rarr;</h2>
          <p>Upload files to firebase storage.</p>
        </a>

        <a href="/chat" className={styles.card}>
          <h2>Chat &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="/about" className={styles.card}>
          <h2>About &rarr;</h2>
          <p>Find out more about me.</p>
        </a>
      </div>
    </Layout>
  );
}
