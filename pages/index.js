import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import LoginScreen from '../components/LoginScreen';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to < span className={styles.blue}>cats quotes!</span>
        </h1>
        <LoginScreen/>

      </main>

    </div>
  )
}
