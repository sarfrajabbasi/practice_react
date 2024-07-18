import React, { useContext } from 'react'
import CompF from './CompF.js'
import UserContext from './UserContext.js'
import ThemeCOntext from './ThemeContext.js';
function CompE() {

  /* 
-  Hum `useContext` ko React se import karte hain.
- Hum `UserContext` aur `ChannelContext` ko import karte hain.
- Hum `useContext(UserContext)` ko use karte hain user value ko paane ke liye aur `useContext(ThemeContext)` ko channel value ko paane ke liye.
- Hum in values ko directly apne JSX mein use kar sakte hain.
  */
  const user = useContext(UserContext);
  const theme = useContext(ThemeCOntext)
  const {background,color} = theme;
  return (
    <div>
        
        CompE
        <CompF></CompF>
        {<div style={{background:theme.background,color:theme.color}}>Hello {user}! background :{background} || Color:{color}
        </div>}
  
    </div>

  )
}

export default CompE