"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { debug } from "console";
import React, {useState, useEffect, useRef} from 'react';
import MultyTitle from "./Title";
import Timer from "./Timer";
import Answers from "./Answers";
import EndGameAlert from './EndGameAlert';


function App () {

 const[currentSeconds, setSeconds] = useState(60);
 const[score, setScore] = useState(0);

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
    setScore(0)
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



  function increaseScore(){
    let sc = score + 1;
    setScore(sc);
  }



return (
   <>
   <MultyTitle />
   {
   currentSeconds > 0 ? (
   <>
   <Answers 
   score={score}
   increaseScore={increaseScore}/>
   <Timer
         currentSeconds={currentSeconds}
         startTimer={startTimer}
         stopIntervalFunc={stopIntervalFunc} /></>
   ) : 
   (
      <EndGameAlert
      score={score}
      startTimer={startTimer}
      stopIntervalFunc={stopIntervalFunc}
      />
   )
   }
  
   </>
);

};


export default App;



