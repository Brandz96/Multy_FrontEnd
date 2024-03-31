import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Button from "@/node_modules/react-bootstrap/esm/Button";
import { MouseEventHandler } from "react";





export function EndGameAlert({score, startTimer, stopIntervalFunc} : {score : Number, startTimer: MouseEventHandler<HTMLButtonElement>, stopIntervalFunc: MouseEventHandler<HTMLButtonElement>}) {
  return (
    <><Alert>
      <AlertTitle>Thanks for Playing</AlertTitle>
      <AlertDescription>
        <>
        Your score is {score}
        </>
      </AlertDescription>
    </Alert><div className="timerButtonsContainer">
        <Button variant="outline-success" id="timerButtons" className="px-4 py-2 mx-3" onClick={startTimer}>
          Start Game
        </Button>
        <Button variant="outline-danger" id="timerButtons" className="px-4 py-2" onClick={stopIntervalFunc}>
          End Game
        </Button>
      </div></>
  )
}

export default EndGameAlert;