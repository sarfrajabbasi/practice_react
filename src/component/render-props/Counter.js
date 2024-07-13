import React, { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);
  console.log(render);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
// pass as arguments
  return <div>{render(count, incrementCount)}</div>;
};

export default Counter;
