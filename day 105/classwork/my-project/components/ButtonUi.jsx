import React from "react"

export default function ButtonUi({children}){
    return(
        <button className="bg-green-800 text-white px-5 py-2 rounded-[20px] border-solid border-black border-[2px] hover:text-white/50 hover:bg-green-500">
            {children}
        </button>
    )
}