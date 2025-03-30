import React, { useEffect } from 'react'
import gsap from 'gsap'

export default function App() {
  useEffect(() => {
    gsap.to(".swimming-turtle",{
      duration: 6,
      x: "100vw",
      ease: 'none',
      repeat: -1
    })
    gsap.to(".swimming-turtle",{
      duration: 2,
      repeat: -1,
      yoyo: true,
      y:"30",
    })
  },[])
  return (
    <>
    <div className='flex flex-col gap-10 overflow-hidden w-[100vw]'>
      <img src="https://i.pinimg.com/736x/f0/42/a7/f042a74e05b6af3eadda4993f2821128.jpg" alt="rah"  className='w-20 swimming-turtle'/>
      <p className='text-xl text-animation bg-cyan-400 p-15 text-green-700'>
        Sea turtles (superfamily Chelonioidea), sometimes called marine turtles, 
        are reptiles of the order Testudines and of the suborder Cryptodira. 
        The seven existing species of sea turtles are the flatback, green, hawksbill, 
        leatherback, loggerhead, Kemp's ridley, and olive ridley. Six of the seven sea 
        turtle species, all but the flatback, are present in U.S. waters, and are listed 
        as endangered and/or threatened under the Endangered Species Act. All but the 
        flatback turtle are listed as threatened with extinction globally on the IUCN Red 
        List of Threatened Species. The flatback turtle is found only in the waters of 
        Australia, Papua New Guinea, and Indonesia.
      </p>
    </div>

    </>
  )
}
