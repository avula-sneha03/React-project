import "./Stopwatch.css"
import React, { useEffect,useState} from "react";
function Stopwatch() {
    const [time, setTime]=useState(0);
    const [isactive, setActivity]=useState(false);
    useEffect(()=>{
        let timer;
        if(isactive){
            timer=setInterval(()=>{
                setTime((prevTime)=>prevTime+1);
            },1000);
        }else{
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[isactive]);
  return (
    <div className="container">
        <h1>Stopwatch</h1>
        <h3>{time}</h3>
        <button id="btn" onClick={()=>setActivity(!isactive)}>{isactive? "Stop": "Start"}</button><br></br>
        <button id="btn" onClick={()=>setTime(0)} disabled={isactive}>Reset</button>
    </div>
  )

}

export default Stopwatch