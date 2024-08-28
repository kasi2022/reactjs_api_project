// import React, { useEffect, useRef, useState } from 'react'

// function Useref() {
//     const[inputone,setinputone]=useState("")
//     const moniter=useRef()
//     const count=useRef(0)

//     useEffect(()=>{
//     count.current = count.current + 1;
        
//     })

//     const getone=()=>{
//         console.log("one")
//         console.log(moniter.current)
//         moniter.current.style.width="400px"
//     }
//     const gettwo =()=>{

//     }
//   return (
//     <div>
//         <p>{inputone}</p>
//         <h1>value count {count.current}</h1>
//        <input ref={moniter} type='text' onChange={(e)=>setinputone(e.target.value)}/><br/>
//        <button  onClick={getone}>statereferenece</button><br/>
//        <button  onClick={gettwo}>statereferenece2</button>

//     </div>
//   )
// }

// export default Useref
import React, { useEffect, useRef, useState } from 'react'

function Useref() {
  const [inputone,setinputone]=useState("")
  const moniter=useRef()
  const count=useRef(0)
  useEffect(()=>{
    count.current=count.current+1
  })
  const getone =()=>{
    console.log("access and element mak changes")
    console.log(moniter)
    moniter.current.style.width="400px"
  }
  return (
    <div>
      <h1>Use ref {inputone} </h1>
      <input type='text' ref={moniter} onChange={(e)=>{setinputone(e.target.value)} } />
      <button onClick={getone}>Change</button>
      <h1>{count.current}</h1>
    </div>
  )
}

export default Useref
