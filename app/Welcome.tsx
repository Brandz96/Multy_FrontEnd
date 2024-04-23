import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Button from "@/node_modules/react-bootstrap/esm/Button";
import { MouseEventHandler } from "react";





export function Welcome({startTimer} : {startTimer: any}) {
  return (
    <><Alert>
      <AlertTitle>Welcome to Multy!</AlertTitle>
      <AlertDescription>
        Multy is an online game to freshen up those multiplication skills, or learn them! You have 60 seconds to answer as many multiplication problems as possible. Good luck and don't forget to challenge your friends!
      </AlertDescription>
    </Alert><div className="timerButtonsContainer">
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

export default Welcome;