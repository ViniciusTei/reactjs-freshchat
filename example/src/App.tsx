import React from 'react'

import { Freshchat } from 'reactjs-freshchat'
import 'reactjs-freshchat/dist/index.css'

const App = () => {
  return (
    <div>
      <h1>Create React Component Example 😄</h1>
      <Freshchat 
        token={"03c69b1e-6a70-4e8f-9380-d56ba7a5df8f"} 
       
        ic_styles={{
          backgroundColor: '#002d85', 
          color: '#fff'
        }}
      />
    </div>
  )
}

export default App
