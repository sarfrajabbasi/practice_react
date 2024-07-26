import React, { useRef, useState } from "react";
/* 
Jab hum kehte hain ki useRef hook re-renders ke across persist karta hai, iska matlab hai ki useRef se jo reference object return hota hai, wo component ke baar-baar render hone ke baad bhi same rehta hai
*/
const RefExample = () => {
  const countRef = useRef(0);
  const [ingnored, forceUpdate] = useState(0); // To force re-render

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current); //Persists value across renders
  };

  const me = () => forceUpdate(ingnored + 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>
        Count (from ref) : {countRef.current}
        <button onClick={me}>Me</button>
      </p>
      <p>{ingnored}</p>
    </div>
  );
};

export default RefExample;
