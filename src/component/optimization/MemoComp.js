import React from "react";

const MemoComp = ({ name }) => {
    /* Is example mein, humne ek simple functional component `MemoComponent` banaya hai jo `name` prop ko receive karta hai aur ek div render karta hai. */
  console.log("MemoComp");
  return <div>{name}</div>;
};

export default React.memo(MemoComp);
