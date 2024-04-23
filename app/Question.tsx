function Question({data,position,difficultyId} : {data : any [], position: number, difficultyId: number}){

  let multiplier = 0;
  let multiplicand = 0;
  let questionIndex = 0;

  if(data.length > 0 && position != null){
    questionIndex = position;
  }

  console.log("Finding Difficulty ID")
  console.log(difficultyId);
  console.log(questionIndex);

  
  if(data.length > 0 ){

  
  
  multiplier = data[difficultyId][questionIndex].multiplier;
  debugger
  multiplicand = data[difficultyId][questionIndex].multiplicand;
  debugger
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


export default Question;