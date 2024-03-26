import Button from "@/node_modules/react-bootstrap/esm/Button";
import { useEffect, useState } from "react";



function Timer  ()  {

  const[currentSeconds, setSeconds] = useState(60);

  function stopIntervalFunc () {
    setSeconds(0)
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
      <><div className="timerButtonsContainer">
       <h3 id="seconds"> {currentSeconds} </h3>
      </div>
      <div className="timerButtonsContainer">
      <Button variant="outline-success" id="timerButtons" className="px-4 py-2 mx-3" onClick={startTimer}>
        Start Game
        </Button>
        <Button variant="outline-danger" id="timerButtons"  className="px-4 py-2" onClick={stopIntervalFunc}>
        End Game
        </Button>
        </div>
        </>
    );
};

export default Timer;