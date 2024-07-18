import React from 'react'
import { UserConsumer } from './UserContext'
import { ThemeConsumer } from './ThemeContext'

function CompF() {
  return (
    <div>
      <>CompF</>
      <ThemeConsumer>
        {theme => <UserConsumer>
          {user => <div style={{background:theme.background,color:theme.color}}>Hello {user}!</div>}
          </UserConsumer>}
      </ThemeConsumer>
    </div>
  )
}

export default CompF