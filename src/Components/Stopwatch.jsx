import "./Stopwatch.css"
import React, { useState} from "react";
function Stopwatch() {
    const [count, SetCount]=useState(0);
    function handleclick(){
        return SetCount(count+1);
    }
    
  return (
    <div className="container">
        <h1>Count: {count}</h1>
        <button id="btn" onClick={handleclick}>Click me</button>
        
    </div>
  )
}

export default Stopwatch