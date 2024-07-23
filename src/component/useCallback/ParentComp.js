import React, { useCallback, useState } from "react";
import Title from "../useCallback/Title.js";
import Count from "../useCallback/Count.js";
import Button from "../useCallback/Button.js";

const ParentComp = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  // optimization -particular state change will re-render
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);
  return (
    <div>
      ParentComp:
      <Title></Title>
      <Count text={'age'} count={age}></Count>
      <Button handleClick={incrementAge}>IncrementAge</Button>
      <Count text={'salary'} count={salary}></Count>
      <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  );
};

export default ParentComp;
