import React, {  useEffect, useRef } from 'react'

const FocusInput = () => {
    // ref variable
    const inputRef  =useRef(null)

    // hande comp mount
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>FocusInput : <input type='text' ref={inputRef}></input></div>
  )
}

export default FocusInput