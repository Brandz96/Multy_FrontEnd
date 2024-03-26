import Button from "@/node_modules/react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import Question from "./Question";
import MultyScore from "./Score";


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
        setShuffle([responseData[0].rightAnswer, responseData[0].wrongAnswer1, responseData[0].wrongAnswer2]);
        //shuffleButtons(responseData)
        console.log(responseData)
       
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

  function shuffleButtons(){
    /**
    
    I need to be able to shuffle the buttons 
    data[position] is the object
    data[position].wrongAnswer1 = first wrong answer
    data[position].rightAnswer = right answer
    data[position].wrongAnswer2 = second wrong answer

    */

    let curr = position + 1;
    setPosition(curr);
    console.log(curr)
    increaseScore();
    let shuffleArr =  [data[curr].rightAnswer, data[curr].wrongAnswer1, data[curr].wrongAnswer2];
    

    

    console.log("Shuffling Buttons")
    
    console.log("Question number: " + curr)
    console.log(data[curr])

    for(let i = shuffleArr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArr[i], shuffleArr[j] ] = [shuffleArr[j], shuffleArr[i]];
    }

    console.log("Current Answer Obj: " + shuffleArr);
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
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={shuffleButtons}>
                {shuffle[0]}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={shuffleButtons}>
                {shuffle[1]}
              </Button>
              <Button variant="outline-secondary" id="customButton" className="px-4 py-2 mx-4" onClick={shuffleButtons}>
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


export default Answers;