import React, { useState } from 'react'
import countContext from '../Statemanagement/useContext'
import Comp2 from './comp2'
function Comp1() {
    const[count,setCount]=useState(0)
    const increment = ()=>{
        setCount(count+1)
    } 
  return (
    <countContext.Provider value={count}>
    <div>
      <Comp2/>
      <button onClick={increment}>+</button>
    </div>
    </countContext.Provider>
  )
}

export default Comp1

