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


function Question({data,position} : {data : any [], position: number}){

  let multiplier = 0;
  let multiplicand = 0;
  let questionIndex = 0;

  if(data.length > 0 && position != null){
    questionIndex = position;
  }

  if(data.length > 0 ){

  
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

  let [data, setData] = useState([] as any);
  let [position, setPosition] = useState(0 as number);
  let [score, setScore] = useState(0 as number);
  let [shuffle, setShuffle] = useState([] as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching data")
        const response = await fetch('http://localhost:8080/data'); // Replace with your Spring Boot API endpoint
        const responseData = await response.json();
        
        setData(responseData);
        setPosition(0);
        shuffleButtons(responseData)
        
       
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

  function shuffleButtons(responseData){
    /**
    
    I need to be able to shuffle the buttons 
    data[position] is the object
    data[position].wrongAnswer1 = first wrong answer
    data[position].rightAnswer = right answer
    data[position].wrongAnswer2 = second wrong answer

    */

    let data = responseData;

    console.log("Shuffling Buttons")
    let shuffleArr : [number, number, number];
    console.log(data)
    shuffleArr = [data[position].rightAnswer, data[position].wrongAnswer1, data[position].wrongAnswer2];
    debugger;
    for(let i = shuffleArr.length -1 ; i > 0 ; i--){
      let place = Math.floor(Math.random() * 3);

      shuffleArr[place] = shuffleArr[i];

    }

    debugger;
    setShuffle(shuffleArr);

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
          {data.length > 0 ? ( // Check if data is available before accessing properties
            <>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4">
                {shuffle[0]}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4">
                {shuffle[1]}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={goToNextQuestion}>
                {shuffle[2]}
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



