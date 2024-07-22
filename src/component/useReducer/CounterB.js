import React, { useContext } from 'react'
import CounterContext from './CounterContext';

const CounterB = () => {
    const {countState,countDispatch} = useContext(CounterContext);

    return (
        <div>
            <h2>Component B - Count: {countState.count}</h2>
            <button onClick={() => countDispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => countDispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => countDispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default CounterB