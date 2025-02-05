import React, { useEffect } from 'react'
import gsap from "gsap"
export default function App() {
  useEffect(() =>{
    gsap.to(".text-animation",{
      duration: 3 ,
      x: "10vw",
      y: "10vh",
      // xPercent: -100,
      // yPercent: -100,
      rotate: 360,
      color: "red",
      yoyo: true,
      repeat: 2,
      stagger: 0.5,
    })
    gsap.to(".loading-text",{
      duration: 10 ,
      opacity: 1,
    })
  },[])
  return (
    <>
      <div className='bg-cyan-400 min-h-screen'>
        <div className='text-animation w-fit text-2xl text-yellow-300'>Test</div>
        <div className='text-animation w-fit text-2xl text-yellow-300'>Test</div>
        <div className='text-animation w-fit text-2xl text-yellow-300'>Test</div>
        <div className='text-animation w-fit text-2xl text-yellow-300'>Test</div>
        <p className='loading-text text-white text-2xl opacity-0'>test p tag</p>
      </div>  
    </>
  )
}
