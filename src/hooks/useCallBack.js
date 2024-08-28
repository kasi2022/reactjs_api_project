import React, { useCallback, useState } from 'react'
import Usecallback2 from './usecallback2'
// check defincation
function UseCallBack() {
    const [count,setCount]=useState(0)
 
     const increment=useCallback(()=>{
        setCount(count+1)
     },[])
  return (
    <div>
        <h1>count{count}</h1>
      <h1>Use Call back</h1>
      <Usecallback2 count={count} increment={increment}/>
    </div>
  )
}

export default UseCallBack


