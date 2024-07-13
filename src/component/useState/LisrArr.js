import React, { useState } from "react";

const LisrArr = () => {
    // state variable or setter function declare kiya, empty array se state variable initialize karte hain.
  const [items, setItems] = useState([]);
  const addItems = () => {
    // @ts-ignore

    // function banao jo new items ko array mein add kare,use function ka use karnege state ko update karne ke liye, useState automatically items ko array mein append nahi karta,pread operator ka use karke existing items ko copy kar new items ko existing array ke sath merge karenge.
    setItems( prevItems => [
      ...prevItems,
      { id: prevItems.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    // add button taki new items add hi click hone pr,list bano jaha item display ho
    <div>
      <button onClick={addItems}>Add numbers</button>
      <ul>
        {/*  state array ko map karte hain taaki har item ko list element ke roop mein render kiya ja sake */}
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
/* 
Is example se aapne seekha kaise array ko state variable ke roop mein useState hook ke sath use karte hain React mein. Spread operator ka use karke array updates ko sahi tarike se handle karte hain. Ye ensure karta hai ki aapke state updates sahi tarike se handle ho aur aapka component expected tareeke se render ho.
*/
export default LisrArr;
