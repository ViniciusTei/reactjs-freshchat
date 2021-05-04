import React from 'react'

import { Freshchat } from 'reactjs-freshchat'
import 'reactjs-freshchat/dist/index.css'

const App = () => {
  return (
    <div>
      <h1>Create React FreshChat Component Example <span role="img" aria-label="smile">😄</span> </h1>
      <Freshchat 
        token={process.env.REACT_APP_FRESHCHAT || ''} 
        label="Support"
        ic_styles={{
          backgroundColor: '#002d85', 
          color: '#fff'
        }}
      />
    </div>
  )
}

export default App
