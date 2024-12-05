import React from "react"

export default function MyButton({onClick , children}){
    return(
        <button onClick={onClick} className="text-red-800 bg-black rounded-[10px] px-5 py-2 w-[100px]">
            {children}
        </button>
    )
}