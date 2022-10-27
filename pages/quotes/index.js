import Head from 'next/head'
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css'
import Quote from '../../components/Quote';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [quotes, setQuotes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  auth.onAuthStateChanged((authUser) => setUser(authUser));


  const signOutUser = () => {
    auth.signOut()
      .then(() => { router.push('/') })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://api.chucknorris.io/jokes/search?query=cats')
      .then(res => res.json())
      .then(quotes => {
        setQuotes(quotes.result)
        setIsLoading(false)
      })
    }
    auth.currentUser ? fetchData() : router.push('/')
    
  }, []);

  return (
    auth.currentUser
    ?
    <div className={styles.container}>
      <Head>
        <title>Welcome </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Quotes</h1>
        <p>My Account: {user?.email}!</p>
        <button onClick={() => signOutUser()}>Sign out</button>
        {isLoading ? <h2>Loading... </h2> :  quotes?.map(q => <Quote quote={q} key={q.id}/>)}
      </main>
      </div>
    :<></>
  )
}
