import React, { useState } from "react";

const group = () =>{
    //useState hook
    const [clintEastwood , setClintEastwood] = useState(0) // <-- set 

    let arr =["The Hobbit: An Unexpected Journey" , "The Hobbit: The Desolation of Smaug" , "The Hobbit: The Battle of the Five Armies" ]
    let counter = 0
    return(//cant render more than 1 components so we render 1 div which has h1 and div childs
    <div>
      <h1>group {5 + 3}</h1>
      <div>
        {arr.map((item , index)=>(
          <div key={`_names-${index}`}>{item}</div>
        ))}
      </div>
      <div>{clintEastwood}</div>
      <button onClick={() => setClintEastwood(clintEastwood + 1)}>Click</button>
    </div>
  )
}
export default group
