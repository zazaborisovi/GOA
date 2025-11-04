"use client";

import { useEffect, useState } from "react";

export default function TestPage(){
    const [data , setData] = useState()
    useEffect(() =>{
        const api = async () =>{
            const req = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const res = await req.json()
            setData(res)
        }
        api()
    }, [])
    return (
        <div>
            {data.map((item) =>(
            <div>
                {item?.id}
            </div>
            ))}
        </div>
    )
}