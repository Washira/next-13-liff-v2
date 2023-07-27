import "../styles/globals.css";
import { useState, useEffect } from "react";
import liff from "@line/liff";

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState();
  const [liffError, setLiffError] = useState();
  const [profileObject, setProfileObject] = useState();
  const [email, setEmail] = useState('');

  // Execute liff.init() when the app is initialized
  // useEffect(() => {
  //   // to avoid `window is not defined` error
  //   // import("@line/liff").then((liff) => {
  //   //   console.log("LIFF init...");
  //   //   liff
  //   //     .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
  //   //     .then(() => {
  //   //       console.log("LIFF init succeeded.");
  //   //       setLiffObject(liff);
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log("LIFF init failed.");
  //   //       setLiffError(error.toString());
  //   //     });
  //   // });

  useEffect(() => {
    (async () => {
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
        .then(() => {
          if (!liff.isLoggedIn()) liff.login()
        })
        .catch((error) => {
          setLiffError(error.toString());
        });
      
      const getData = await liff.getProfile()

      setLiffObject(liff)
      setProfileObject(getData)

      const userEmail = liff.getDecodedIDToken().email

      setEmail(userEmail)

    })()
  }, []);


  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  pageProps.profile = profileObject;
  pageProps.email = email;
  return <Component {...pageProps} />;
}

export default MyApp;
