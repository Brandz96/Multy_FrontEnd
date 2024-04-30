import Button from "@/node_modules/react-bootstrap/esm/Button";
import { MouseEventHandler, useEffect, useState } from "react";



function Timer  ({currentSeconds, startTimer, stopIntervalFunc} : {currentSeconds: Number, startTimer: any, stopIntervalFunc: MouseEventHandler<HTMLButtonElement>})  {

  
    return (
      <>
      <div className="timerButtonsContainer">
      
       <h3 id="seconds"> {currentSeconds as any} </h3>
       
      </div>
      <div className="timerButtonsContainer">
      <Button variant="outline-success" id="timerButtons" className="px-4 py-2 mx-3" onClick={startTimer(0)}>
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