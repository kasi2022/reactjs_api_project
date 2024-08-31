import React, { useContext } from 'react'
import countContext from './useContext'

function Comp2() {
    const data1=useContext(countContext)
  return (
    <div>
      <h1>{data1}</h1>
    </div>
  )
}

export default Comp2
