import React from "react"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

export default function NavLinks(){
    const navlinks = [
        {
          li: "lorem"
        },
        {
          li: "ipsum"
        },
        {
          li: "dolor"
        },
        {
          li: "sit amet"
        },
      ]
      const [click , setClick] = useState(false)
      const handleclick= () =>{
        setClick(!click)
      }
    return(
        <div className="bg-black text-white h-14 flex items-center gap-24 justify-center md:gap-96">
            <a href="#" classNam e="lg:text-2xl md:text-xl">LOGO</a>
            <ul className="
            flex gap-9 
            md:hidden 
            lg:flex lg:gap-12 lg:relative
            ">
                {
                    navlinks.map((item , index) =>(
                        <li key={`_names-${index}`} className="">{item.li}</li>
                    ))
                }
            </ul>
            <a href="#" className="
            lg:text-2xl 
            md:text-lg md:hidden
            ">ABOUT
            </a>
            <FaBars className={`lg:hidden md:visible ${click && "hidden"}`} onClick={() => handleclick()} />
            <FaBarsStaggered className={`lg:hidden md:visible ${!click && "hidden"}`} onClick={() => handleclick()} />
        </div>
    )
}