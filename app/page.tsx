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
 
 let interval: string | number | NodeJS.Timeout | undefined;

  function stopIntervalFunc () {
   console.log("Calling Stop Interval Func")

   clearInterval(interval);
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

      interval = setInterval(
      () => { 
      if(currentSeconds > 0){
       setSeconds((currentSeconds) =>
        currentSeconds - 1);
      }
   
  }, 1000)
}



  // useEffect(() => {
  //   interval = setInterval(
  //     () => { 
  //     if(currentSeconds > 0){
  //      setSeconds((currentSeconds) =>
  //       currentSeconds - 1);
  //     }
    
  //   }, 1000);

  //   return () => 
  //   clearInterval(interval)
    
  // },);



  function increaseScore(){
    let sc = score + 1;
    setScore(sc);
  }



return (
   <>
   <MultyTitle />
   {
      currentSeconds == 61 ? ( 

   <Welcome
         startTimer={startTimer}             
      />

   ) 
   
   : currentSeconds > 0 ? (
   <>
   <Answers 
         score={score}
         increaseScore={increaseScore}/>
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



