import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

    const [data,setData] = useState([])
    const [input,setInput] = useState("")
    const [input2,setInput2] = useState("")


    console.log("hello")
    // setData(console.log("hi"))
    useEffect(()=>{
        console.log("inside useEffect")
    },[])

  return (
    
    <div>
      useEffect <br/>

      <input type="text" className='border-1' value={input} onChange={(e)=>{setInput(e.target.value)}} /> <br/> <br />
      <input type="text" className='border ' onChange={(e)=>{setInput2(e.target.value)}} /> <br />
    </div>
  )
}
