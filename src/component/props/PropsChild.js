import React from 'react'

const PropsChild = ({greetHandler}) => {

  return (
    <div>
      <button onClick={()=>greetHandler('PropsChild')}>button</button>
    </div>
  )
}

export default PropsChild