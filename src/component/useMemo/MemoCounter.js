import React, { useMemo, useState } from "react";

const MemoCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementOne = ()=>{
      setCount1(count1+1)
    }
    
    const incrementTwo = ()=>{
        const t0 = performance.now()
        setCount2(count2+1)
        const t1 = performance.now()
        console.log(`doSmoething ${t1-t0} milliseconds`);
  }
  const isEven = useMemo(()=>{
    const t0 = performance.now()
    let i =0;
    while(i < 200000000){
        i+=1
    }
    const t1 = performance.now()
    console.log(`doSmoething ${t1-t0} milliseconds`);
    return count1 % 2 === 0
  },[count1])

  return <div>
    <>
    <button onClick={incrementOne}>Count 1 :- {count1}</button>
    <span>{isEven ? "Even":"Odd"}</span>
    </>
    <>
    <button onClick={incrementTwo}>Count 2 :- {count2}</button>
    
    </>
  </div>;
};

export default MemoCounter;
