import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function Home({ liff, liffError, profile, email }) {
  const [data, setData] = useState([])

  console.log(profile);

  // profile.pictureUrl
  // profile.userId
  // profile.displayName
  // profile.statusMessage
  // liff.getDecodedIDToken().email

  useEffect(() => {
    if (profile) setData(profile)
    console.log('email ', email)
    
  }, [profile, email]);

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
            {data.pictureUrl && (
              <Image
                alt={data.displayName}
                src={data.pictureUrl}
              />
            )}
            <div>{data.userId}</div>
            <div>{data.displayName}</div>
            <div>{data.statusMessage}</div>
            {email && <div>{email}</div>}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home