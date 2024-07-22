import React, { useReducer } from "react";
// Define the initial state and reducer function
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};
const CounterThree = () => {
  // Use two separate useReducer hooks for two independent counters

  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h2>Counter One : {countOne.count}</h2>
        <button onClick={() => dispatchOne({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatchOne({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatchOne({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <h2>Counter Two :{countTwo.count}</h2>
        <button onClick={() => dispatchTwo({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default CounterThree;
