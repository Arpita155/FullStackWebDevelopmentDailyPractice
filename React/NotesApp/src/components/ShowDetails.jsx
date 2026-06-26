import React, { useState } from 'react'

export default function ShowDetails() {

    // let output = "hello";
    let [output,updatedFunction] = useState("Hello")

    function updateOutput(){
        updatedFunction("update output")
    }
  return (
    <div>
        <div>{output}</div>
        <button onClick={updateOutput} className='border-1 p-2 bg-gray-500 cursor-pointer'>Update Output</button>
      
    </div>
  )
}
