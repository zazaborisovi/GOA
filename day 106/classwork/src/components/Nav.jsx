import React from "react"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

export default function NavLinks(){
    const navlinks = [
        {
          li: "about"
        },
        {
          li: "contacts"
        },
        {
          li: "services"
        }
      ]
      const [click , setClick] = useState(false)
      const handleclick= () =>{
        setClick(!click)
      }
    return(
        <div className="bg-black text-white">
            <div className="container flex justify-between">
                <a href="" className="lg:text-2xl">ixvistolma</a>
                <nav>
                    <div className="sm:hidden flex text-2xl">
                        <FaBars onClick={() => handleclick()} className={`${click && "hidden"}`}/>
                        <FaBarsStaggered onClick={() => handleclick()} className={`${!click && "hidden"}`}/>
                    </div>
                    {/*desktop*/}
                    <div className="">
                        <ul className="sm:flex hidden gap-5 lg:text-2xl text-xl">
                            {
                                navlinks.map((item , index)=>(
                                    <li key={`_names-${index}`} className="hover:text-blue-500">{item.li}</li>
                                ))
                            }
                        </ul>
                    </div>
                    {/*phone*/}
                    <div className="relative">
                        <ul className={`transition-all ${click ? "translate-x-0" : "translate-x-[500px]"} sm:hidden flex gap-10 lg:text-2xl text-xl absolute right-0 text-black flex-col bg-slate-300`}>
                            {
                                navlinks.map((item , index)=>(
                                    <li key={`_names-${index}`} className="hover:text-blue-500">{item.li}</li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}