import Button from "@/node_modules/react-bootstrap/esm/Button";
import React, { useState, useEffect, MouseEventHandler } from "react";
import Question from "./Question";
import MultyScore from "./Score";


function Answers({score, increaseScore, difficultyId} : {score : number, increaseScore: any, difficultyId: number}) {

  let [data, setData] = useState([] as any);
  let [position, setPosition] = useState(0 as number);
  //let [score, setScore] = useState(0 as number);
  let [shuffle, setShuffle] = useState([] as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching data")
        const response = await fetch(`http://localhost:8081/getAllData`); // Replace with your Spring Boot API endpoint
        const responseData = await response.json();
        //console.log(responseData);
        //console.log("Diff ID in Answers : " + difficultyId)
        setData(responseData);
        setPosition(0);



      
        setShuffle([responseData[difficultyId][position].rightAnswer, responseData[difficultyId][position].wrongAnswer1, responseData[difficultyId][position].wrongAnswer2]);
        
       
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors gracefully
      }
    };

    fetchData();
    
    
  }, []);
  

  

  function shuffleButtonsAndGoToNextQuestion(event: React.MouseEvent<HTMLButtonElement>){

    
    const element = event.target as HTMLButtonElement
    const innerText = element.innerText;

    if(innerText == data[difficultyId][position].rightAnswer) {

    let curr = position + 1;
    setPosition(curr);
    increaseScore();
    console.log(score)
    let shuffleArr =  [data[difficultyId][curr].rightAnswer, data[difficultyId][curr].wrongAnswer1, data[difficultyId][curr].wrongAnswer2];

    for(let i = shuffleArr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArr[i], shuffleArr[j] ] = [shuffleArr[j], shuffleArr[i]];
    }

    
    setShuffle(shuffleArr);

    }

  }


  return (
    
    <>
    <MultyScore
      score={score} />
    
    <Question
      data={data}
      position={position}
      difficultyId={difficultyId} />
      <div className="responsiveContainer">
        <div className="grid grid-cols-3">
          {data.length > 0 ? ( // Check if data is available before accessing properties
            <>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={shuffleButtonsAndGoToNextQuestion}>
                {shuffle[0]}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={shuffleButtonsAndGoToNextQuestion}>
                {shuffle[1]}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={shuffleButtonsAndGoToNextQuestion}>
                {shuffle[2]}
              </Button>
            </>
          ) : (
            <p>Data not loading</p>
          )}
        </div>
      </div>
      
      </>

  );
};


export default Answers;