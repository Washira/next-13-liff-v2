import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

function Home({ profile }) {
  const [data, setData] = useState([])

  console.log(profile);

  // profile.pictureUrl
  // profile.userId
  // profile.displayName
  // profile.statusMessage
  // liff.getDecodedIDToken().email

  useEffect(() => {
    if (profile) setData(profile)
    
  }, [profile]);

  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>create-liff-app</h1>
        {data && (
          <div>
            <div>{data.userId}</div>
            <div>{data.displayName}</div>
            <div>{data.statusMessage}</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home