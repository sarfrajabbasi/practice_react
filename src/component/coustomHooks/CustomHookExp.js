import React from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHookExp = () => {

const [name,setName] = useLocalStorage('name','')
  return (
    <div>
        <input 
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}>
        </input>
        <p>Hello,{name}!</p>
    </div>
  )
}

export default CustomHookExp