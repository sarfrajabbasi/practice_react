// HoverCounter.js
import React from 'react';

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <h2 onMouseOver={incrementCount}>
      Hovered {count} times
    </h2>
  );
};

export default HoverCounter;
