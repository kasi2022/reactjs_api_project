import React, { useEffect } from 'react'

function Usecallback2(props) {
   useEffect (()=>{
    console.log("increment function ")
   },[props.increment])

   useEffect(()=>{
    console.log("count")
   },[props.count])
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>increment</button>
    </div>
  )
}

export default Usecallback2
