"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { debug } from "console";
import React, {useState, useEffect, useRef} from 'react';
import MultyTitle from "./Title";
import Timer from "./Timer";
import Answers from "./Answers";


function App () {

   const[currentSeconds, setSeconds] = useState(60);

  function stopIntervalFunc () {
   console.log("Calling Stop Interval Func")
   let newSeconds = 0;

   setSeconds(newSeconds);
    
   console.log("Stopping Timer")
   console.log(newSeconds);
   console.log(currentSeconds)
  }

  function startTimer() {
    console.log("Calling starttimer")
 
    let newSeconds = 60;
    setSeconds(newSeconds)
   
  }

  useEffect(() => {
    const interval = setInterval(
      () => { 
      if(currentSeconds > 0){
       setSeconds((currentSeconds) =>
        currentSeconds - 1);
      }
    
    }, 1000);

    return () => 
    clearInterval(interval)
    
  },);



return (
   <>
   <MultyTitle />
   {
   currentSeconds > 0 ? (
   <>
   <Answers />
   <Timer
         currentSeconds={currentSeconds}
         startTimer={startTimer}
         stopIntervalFunc={stopIntervalFunc} /></>
   ) : 
   (
      <p>Seconds Not working</p>
   )
   }
  
   </>
);

};


export default App;



