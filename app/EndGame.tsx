import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Button from "@/node_modules/react-bootstrap/esm/Button";
import { MouseEventHandler } from "react";





export function EndGameAlert({score, startTimer} : {score : Number, startTimer: any}) {
  return (
    <><Alert>
      <AlertTitle>Thanks for Playing!</AlertTitle>
      <AlertDescription>
        <>
        Your score is {score}!
        </>
      </AlertDescription>
    </Alert><div className="timerButtonsContainer">
        {/* <Button variant="outline-success" id="timerButtons" className="px-4 py-2 mx-3" onClick={() => startTimer(0)}>
          Start Game
        </Button> */}
        <Button variant="outline-success" id="timerButtons" className="px-4 py-2 mx-3" onClick={() => startTimer(0)}>
          Beginner
        </Button>
        <Button variant="outline-info" id="timerButtons" className="px-4 py-2 mx-3" onClick={() => startTimer(1)}>
          Easy
        </Button>
        <Button variant="outline-primary" id="timerButtons" className="px-4 py-2 mx-3" onClick={() => startTimer(2)}>
          Normal
        </Button>
      </div></>
  )
}

export default EndGameAlert;