import React, { useState } from "react";
//  useState ko react se import karein
const Counter = () => {

  const initialState = 0
  const initArray = []

  // useState ke saath state initialize kiya h and initialState argument pass kiya useState m
  const [count, setCount] = useState(initialState);
  const [mutlples, setMultiple] = useState(initArray);

  // Updating State Based on Previous State

   /* 
   
   Incorrect way: Multiple updates ke case mein bugs ho sakte hain

  const increment = ()=> setCount(count + 1)
 */

  
  // EVENT Handlers:
  // Correct way: Safe update based on previous state
  
  // count 1 se incresase
  const increment = () => setCount((prevState) => prevState + 1);
  // count 1 se decresase
  const decrement = () => setCount((prevState) => prevState - 1);
  // count set to initial value
  const reset = () => setCount(initialState);

  const increment5 = ()=>{
    for(let i=0;i<5;i++){
      setCount(prevCount => prevCount+1)
    }
  }

  const tableCount = ()=>{
    const newTable = [];

    for(let i=1;i<=10;i++){
      newTable.push(`${count} x ${i} = ${i*count}`)
    }
    setMultiple(newTable)
    }
  

    // RENDER :
  return (

    <div>
      {/* current value ko display kiya */}
      <p>Count : {count}</p>

      {/* 3 button add kiya : */}
      {/* add function in event */}
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      <button onClick={reset}> Reset</button>
      <button onClick={increment5}> IncrementByFive</button>
      <button onClick={tableCount}> Table</button>
     <ul>
      {mutlples.map((num,index)=>(<li key={index}>{num}</li>))}
     </ul>

    </div>
  );
};

export default Counter;
