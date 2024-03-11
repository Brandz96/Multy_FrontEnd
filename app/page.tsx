"use client";
import Button from "@/node_modules/react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect, useRef} from 'react';



function App () {


function MultyTitle () {

  return (
  <h3 className="multyTitle">Multy</h3>
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


// function Question({data}){

//   if(data !== null){
//   let multiplier = data.multiplier;
//   let multiplicand = data.multiplicand;
//   }
//   let x = " x ";


//   return (
  
//     <div className="container">
//       {/* {data ? ( // Check if data is loaded before rendering
//         <h1>
//           {data.multiplier}  {x} {data.multiplicand}
//         </h1>
//       ) : (
//         <h1>Data not loaded</h1>
//       )} */}

//       <h1>11 x 11</h1>
//     </div>
//   );
// }

function Question(){

  // if(data !== null){
  // let multiplier = data.multiplier;
  // let multiplicand = data.multiplicand;
  // }
  // let x = " x ";


  return (
  
    <div className="container">
      {/* {data ? ( // Check if data is loaded before rendering
        <h1>
          {data.multiplier}  {x} {data.multiplicand}
        </h1>
      ) : (
        <h1>Data not loaded</h1>
      )} */}

      <h1>11 x 12</h1>
    </div>
  );
}



function Answers() {

  let [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/answer'); // Replace with your Spring Boot API endpoint
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors gracefully
      }
    };

    fetchData();
  }, []); 

  return (
    
    // <><Question
    //   data={data} />
    <><Question
      />
      <div className="responsiveContainer">

        <div class="grid grid-cols-3">
          {/* {data ? ( // Check if data is available before accessing properties
            <>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4">
                {data.wrongAnswer1}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4">
                {data.wrongAnswer2}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4">
                {data.rightAnswer}
              </Button>
            </>
          ) : (
            <p>Data not loading</p>
          )} */}
           <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-3">
                Answer 1
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-3">
                answer 3 2
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-3">
                answer 3
              </Button>
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



