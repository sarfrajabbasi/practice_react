import React,{useEffect, useState} from 'react'

const CounterEffect = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    useEffect(()=>{
      // update document title
        console.log('Updating document title');
        document.title = `Clicked ${count} times`

        // useEffect tabhi run karega jab count value change hogi,name value change hone pr nahi
    })
    const incrementCount = ()=> setCount(PrevCount => PrevCount +1 )
  return (
    <div>
      <input
      type='text'
      value={name}
      onChange={(e)=> setName(e.target.name)}></input>
        <p>You Clicked {count} times</p>
        <button onClick={incrementCount}>Click me</button>
    </div>
  )
}

export default CounterEffect