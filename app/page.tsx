"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { debug } from "console";
import React, {useState, useEffect, useRef} from 'react';
import MultyTitle from "./Title";
import Timer from "./Timer";
import Answers from "./Answers";
import EndGameAlert from './EndGame';
import Welcome from './Welcome';


function App () {

 const[currentSeconds, setSeconds] = useState(61);
 const[score, setScore] = useState(0);
 const interval = useRef(0);
 const difficultyId = useRef(-1);

  function stopIntervalFunc () {
   console.log("Calling Stop Interval Func")

   const intervalId = interval.current;

   clearInterval(intervalId);
   let newSeconds = 61;

   setSeconds(newSeconds);


    
   console.log("Stopping Timer")
   console.log(newSeconds);
   console.log(currentSeconds)


  }

  function startTimer(difficultyFromWelcome : number) {
    console.log("Calling starttimer")
    //debugger
    setScore(0)
    let newSeconds = 60;
    setSeconds(newSeconds)
    difficultyId.current = difficultyFromWelcome;
    console.log(difficultyId.current);
    
    if(typeof window !== "undefined"){
    const intervalId = window.setInterval(
      () => { 
      if(currentSeconds > 0){
       setSeconds((currentSeconds) =>
        currentSeconds - 1);
      }
   
  }, 1000)
    
  interval.current = intervalId;
}
  }



  function increaseScore(){
    let sc = score + 1;
    setScore(sc);
  }



return (
   <>
   <MultyTitle />
   {
      (currentSeconds == 61 || difficultyId.current == -1) ? ( 

   <Welcome
         startTimer={startTimer}             
      />

   ) 
   
   : currentSeconds > 0 ? (
   <>
   <Answers 
         score={score}
         increaseScore={increaseScore}
         difficultyId = {difficultyId.current}
         />
   <Timer
         currentSeconds={currentSeconds}
         startTimer={startTimer}
         stopIntervalFunc={stopIntervalFunc} 
      />
   </>
   ) 
   : 
   <EndGameAlert
         score={score}
         startTimer={startTimer}
   />
   }
   </>
);

};


export default App;



