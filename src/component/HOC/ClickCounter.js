import React from 'react'
import WithCounter from './withCounter'

const ClickCounter = ({count,incrementCount}) => {

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>
        Clicked {count} times
    </button>
    </div>
  )
}

export default WithCounter(ClickCounter,50)