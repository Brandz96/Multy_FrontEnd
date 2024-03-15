"use client";
import Button from "@/node_modules/react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { debug } from "console";
import React, {useState, useEffect, useRef} from 'react';



function App () {


function MultyTitle () {

  return (
  <h3 className="multyTitle">Multy</h3>
  )
}

function MultyScore ({score} : {score : number}) {

  return (
  <h3 className="multyScore">
    {score}
  </h3>
  )
}

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


function Question({data,position} :{data: any[], position: number}){

  let multiplier = 0;
  let multiplicand = 0;
  let questionIndex = 0;

  if(data != null && position != null){
    questionIndex = position;
  }

  if(data !== null){

  
  multiplier = data[questionIndex].multiplier;
  multiplicand = data[questionIndex].multiplicand;
  }
  let x = " x ";


  return (
  
    <div className="container">
      {data ? ( // Check if data is loaded before rendering
        <h1>
          {multiplier}  {x} {multiplicand}
        </h1>
      ) : (
        <h1>Data not loaded</h1>
      )}

      {/* <h1>11 x 11</h1> */}
    </div>
  );
}

// function Question(){

//   // if(data !== null){
//   // let multiplier = data.multiplier;
//   // let multiplicand = data.multiplicand;
//   // }
//   // let x = " x ";


//   return (
  
//     <div className="container">
//       {/* {data ? ( // Check if data is loaded before rendering
//         <h1>
//           {data.multiplier}  {x} {data.multiplicand}
//         </h1>
//       ) : (
//         <h1>Data not loaded</h1>
//       )} */}

//       <h1>11 x 12</h1>
//     </div>
//   );
// }




function Answers() {

  let [data, setData] = useState([] as any[]);
  let [position, setPosition] = useState(0 as number);
  let [score, setScore] = useState(0 as number);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/data'); // Replace with your Spring Boot API endpoint
        const responseData = await response.json();
    
        setData(responseData);
        setPosition(0);
       
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors gracefully
      }
    };

    fetchData();
    
  }, []);
  
  function goToNextQuestion() {
    let curr = position + 1;
    setPosition(curr);
    increaseScore();
  }

  function increaseScore(){
    let sc = score + 1;
    setScore(sc);
  }



  return (
    
    <>
    <MultyScore
      score={score} />
    <Question
      data={data}
      position={position} />
      <div className="responsiveContainer">

        <div className="grid grid-cols-3">
          {data ? ( // Check if data is available before accessing properties
            <>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4">
                {data[position].wrongAnswer1}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4">
                {data[position].wrongAnswer2}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={goToNextQuestion}>
                {data[position].rightAnswer}
              </Button>
            </>
          ) : (
            <p>Data not loading</p>
          )}
           {/* <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-3">
                Answer 1
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-3">
                answer 3 2
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-3">
                answer 3
              </Button> */}
        </div>
      </div></>
  );
};


return (
   <>
   <MultyTitle />
   <Answers />
   <Timer />
   </>
);

};


export default App;



