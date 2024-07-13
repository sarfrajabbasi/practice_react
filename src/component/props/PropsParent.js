import React, { useState } from 'react'
import PropsChild from './PropsChild'

const PropsParent = () => {
  const [parentName,setParentName]= useState('Parent');
  const greetParent = (child="")=>{
    setParentName('propsParent')
    alert(`Hello ${parentName} from ${child}`)
  }

  return (
    <div>
      <PropsChild greetHandler = {greetParent} ></PropsChild>
    </div>
  )
}

export default PropsParent