import "../styles/globals.css";
import { useState, useEffect } from "react";
import liff from "@line/liff";

function MyApp({ Component, pageProps }) {
  // const [liffObject, setLiffObject] = useState(null);
  // const [liffError, setLiffError] = useState(null);

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
        // if (!res.isLoggedIn()) res.login()
        if (!liff.isLoggedIn()) liff.login()
      })
      // if (!liff.isLoggedIn()) liff.login()
      // liff.login()
      
      // const getData = await liff.getProfile()
      // setData(getData)
      // console.log('setLiff ', setLiff);
      console.log(liff.isLoggedIn());
    })()
  }, []);

  //   // liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
  //   //   .then(() => {
  //   //     console.log("LIFF init succeeded.");
  //   //     setLiffObject(liff);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log("LIFF init failed.");
  //   //     setLiffError(error.toString());
  //   //   });
  // }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  // pageProps.liff = liffObject;
  // pageProps.liffError = liffError;
  return <Component {...pageProps} />;
}

export default MyApp;
