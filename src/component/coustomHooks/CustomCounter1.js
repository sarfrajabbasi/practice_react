// @ts-nocheck
import React,{ useEffect, useState } from 'react'
import useCounter from './useCounter'

const CustomCounter1 = () => {
  const [count,increment,decrement,reset] = useCounter(0,5)
  const [numArr,setNum] = useState([]);

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
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <ul>
        {numArr.map((num,index)=> <li key={index}>{num}</li>)}
      </ul>
    </div>
  )
}

export default CustomCounter1