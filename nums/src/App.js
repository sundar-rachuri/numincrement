import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  return (
      <div>
        <center>
          <h1>INCREMENTING NUMBERS</h1>
          <h2>You clicked {count} times</h2>
          <button style={{ background:"red",color:"white"}} onClick={() => setCount(count+1)}>Clickme</button>
        </center>
      </div>
  )
}

export default App

