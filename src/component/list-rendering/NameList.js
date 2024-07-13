import React from "react";
import NameItem from "./NameItem";

const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];

  return (
    <ul>
      {names.map((name) => (
        <NameItem key={name} name={name}></NameItem>
      ))}
    </ul>
  );
};

export default NameList;
