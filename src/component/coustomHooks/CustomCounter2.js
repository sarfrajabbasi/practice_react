// @ts-nocheck
import React, { useEffect, useState } from 'react'
import useCounter from './useCounter'

const CustomCounter2 = () => {
    const [count,increment,decrement,reset] =  useCounter(10,10);

    const [numArr,setNum] = useState([])
    useEffect(()=>{ 
    if(count < 0){
        for(let i=1;i<=(-count);i++){
          setNum([...numArr,-i])
        }
      }else{
        for(let i=1;i<=count;i++){
          setNum([...numArr,i])
        }
      }
     },[count])
  return (
    <div>
        <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <ul>
        {numArr.map((num,index)=> <li key={index}>{num}</li>)}
      </ul>
    </div>
    </div>
  )
}

export default CustomCounter2