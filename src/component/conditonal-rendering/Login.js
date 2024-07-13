import React, { useState } from 'react'
import Rendering from './Rendering';

const Login = () => {
    const [login,setLogin] = useState(false);
     const isLogin = ()=>{
        setLogin(true)
     }
  return (

    <div>
        <Rendering isLoggedIn={login}></Rendering>
        <button onClick={isLogin}>Login</button>
    </div>
  )
}

export default Login