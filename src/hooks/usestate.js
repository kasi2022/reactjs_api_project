import React, { useState } from 'react'

function Usestate() {
    const[count,setCount]=useState(0)
    function add(){
        console.log("add function")
    }
    const increment = ()=>{
        setCount(count+1)
    }
  return (
    <div> 
        <h1>{count}</h1>
     <button onClick={()=>add()}>add</button>
     <button onClick={increment}>+</button>
    </div>
  )
}

export default Usestate
