import React, { useState } from 'react'

const ControlledInput = () => {
    const [userName,setUserName] = useState('');
    const handleUsernameChange = (event)=>{
        setUserName(event.target.value);
    }
  return (
    <form>
        <label>UserName</label>
        <input type='text' value={userName} onChange={handleUsernameChange}></input>
    </form>
  )
}

export default ControlledInput