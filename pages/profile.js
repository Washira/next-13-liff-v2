import React from 'react'
import liff from "@line/liff";
import { useState, useEffect } from "react";

const Profile = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    (async() => {
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
      const setLiff = liff.login()
      const getData = await setLiff.getProfile()
      setData(getData)
      console.log('setLiff ', setLiff);
    })()
    
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <div>{data}</div>
    </div>
  )
}

export default Profile