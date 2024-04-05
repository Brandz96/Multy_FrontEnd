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


export default Question;