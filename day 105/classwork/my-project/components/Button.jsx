import React from "react"

export default function Button(props){
    return(
        <div>
            <h2>{props.value}</h2>
            <h2>{props.level}</h2>
        </div>
    )
}