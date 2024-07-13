import React, { useEffect, useState } from "react";
import MemoComp from "./MemoComp";

const ParentComp = () => {
    /* Is `ParentComponent` mein, humne ek timer setup kiya hai jo har 2 seconds mein `name` state ko change karta hai. Fir hum `MemoComponent` ko `name` prop ke sath render karte hain.

 */
  const [name, setName] = useState("me");
  useEffect(() => {
      const interval = setInterval(() => {
          setName("sarfraj");
        }, 1000);
        
        return () => clearInterval(interval);
    },[]);
    
    console.log('ParentComp');
  return <div>
    <MemoComp name={name}></MemoComp>
  </div>;
};

export default ParentComp;


/* 
Discussion
Initial Render: Shuru mein dono ParentComponent aur MemoComponent render hote hain aur console mein "Rendering MemoComponent" log hota hai.
Subsequent Renders: Initial render ke baad, jab parent component har 2 seconds mein re-render hota hai state changes ke wajah se, tab "Rendering ParentComponent" log hota hai, lekin "Rendering MemoComponent" nahi hota, jo indicate karta hai ki MemoComponent unnecessary re-render nahi ho raha.
React.memo effectively component ko memoize karta hai, performance ko optimize karta hai by avoiding re-renders jab props same rehte hain.
*/
