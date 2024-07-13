import React, { useState } from 'react';

const withCounter = (WrappedComponent,incrementValue) => {
  return (props) => {
    // console.log(props);
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(prev => prev + incrementValue);
    };

    return <WrappedComponent count={count} incrementCount={incrementCount} {...props} />;
  };
};

export default withCounter;
