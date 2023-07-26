import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import liff from "@line/liff";

export default function Home() {

  const [data, setData] = useState([])

  // const getDataFromLiff = async () => {
  //   if (liff) {
  //     await liff.login()
  //     const profile = await liff.getProfile()
  //     if (profile) {
  //       setData(profile)
  //       console.log(profile)
  //     }
      
  //     // .then(profile => {
  //     //   // profile.pictureUrl;
  //     //   // profile.userId;
  //     //   // profile.displayName;
  //     //   // profile.statusMessage;
  //     //   // liff.getDecodedIDToken().email;

  //     //   setName(profile.displayName)
  //     // })
  //     // .catch(err => console.error(err));
  //   }
  // }

  // useEffect(() => {
  //   (async () => {
  //     await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
  //     .then(() => {
  //       // if (!res.isLoggedIn()) res.login()
  //       if (!liff.isLoggedIn()) liff.login()
  //     })
  //     // if (!liff.isLoggedIn()) liff.login()
  //     // liff.login()
      
  //     // const getData = await liff.getProfile()
  //     // setData(getData)
  //     // console.log('setLiff ', setLiff);
  //     // console.log(liff.isLoggedIn());
  //   })()
    
  // }, []);

  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>create-liff-app</h1>
        {/* {data && <p>{data}</p>} */}
        
      </main>
    </div>
  );
}