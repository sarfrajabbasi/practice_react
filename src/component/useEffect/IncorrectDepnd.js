import React, { useState, useEffect } from 'react';

const IncorrectDepnd = () => {
    const [count,setCount] =  useState(0)

    useEffect(()=>{
        const ticks = ()=>{
            // correct approach
            console.log(`count:${count}`);
            setCount(prevCount => prevCount+1)
            // setCount(count+1)
        }
        console.log('add timer');
        const interval = setInterval(ticks,1000);

        return ()=>{
            clearInterval(interval)
            console.log('remove timer');
        }
    },[])
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default IncorrectDepnd