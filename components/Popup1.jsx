'use client'
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormList from './Form/FormList';
export default function Popup1() {
    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
      const interval=setInterval(() => {
        setToggle(true);
    }, 30000);
    return ()=>clearInterval(interval)
    },[toggle])
  return (
    <Popup 
    open={toggle}
    lockScroll={true}
     contentStyle={{
      height:"100vh",
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"transparent",
      backdropFilter:"blur(5px)"
     }}
    closeOnEscape={false}
    closeOnDocumentClick={false}
    >
      <div className='relative '>
    <FormList selectremove="yes" />
    <button onClick={()=>{
      setToggle(false)
    }} className=' bg-black p-2 text-white absolute top-3 right-3 text-3xl'>X</button>
    </div>
  </Popup>
  )
}
