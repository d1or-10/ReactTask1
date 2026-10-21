import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(1)
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>count</button>
    </div>
  )
}

export default Counter