import React from "react";

const Rendering = ({ isLoggedIn }) => {
  let message =  isLoggedIn ? <div>Welcome Sarfraj</div>:<div>Welcome Guest</div>;

//   if (isLoggedIn) {
//     message = <div>Welcome Sarfraj</div>;
//   } else {
//     message = <div>Welcome Guest</div>;
//   }
  return message;
};

export default Rendering;
