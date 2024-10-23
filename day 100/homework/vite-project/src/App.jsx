import React, { useState } from "react";

const group = () =>{
    //useState hook
    const [counter , setCounter] = useState(0) // <-- set 

    let arr =[
      "The Hobbit: An Unexpected Journey" ,
      "The Hobbit: The Desolation of Smaug" ,
      "The Hobbit: The Battle of the Five Armies" ,
      "The Dark Knight" , "Titanic" , "The Matrix"]
    return(
    <div id="mainDiv">
      <header>
        <h1>group {5 + 3}</h1>
        <li>
          <ul>about</ul>
          <ul>contacts</ul>
          <ul>home</ul>
        </li>
      </header>
      <div id="movieDiv">
        {/* movies */}
        {arr.map((item , index)=>(
          <ol key={`_names-${index}`}>{item}</ol>
        ))}
      </div>
      {/* counter */}
      <div id="counterDiv">
        <div id="counter">{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
      </div>
    </div>
  )
}
export default group
