import React, { useState } from 'react'

export default function ShowDetails() {

    // let output = "hello";
    let [output,updatedFunction] = useState("Hello")
    const [name, setName] = useState("")

    function updateOutput(){
        updatedFunction("output updatted")
    }
  return (
    <div>
        <div>{output}</div>
        <button onClick={updateOutput} className='border-1 p-2 bg-gray-500 cursor-pointer'>Update Output</button>  <br /><br />

        <input type="text" className='border border-1 h-10 w-70 p-2' placeholder='Name..' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
        <div className='border boder-1 mt-10 mx-20 w-90 p-4'>
          <ul>
          <li>Name : {name}</li>
        </ul>
      </div>
    </div>
  )
}
