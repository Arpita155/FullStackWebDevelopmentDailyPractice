import React, { useState } from 'react'

export default function AddFruits() {
    const [fruits,setFruits] = useState(["Apple","Mango"])
    const [name,setName] = useState("")

  return (
    <div>
      
      <h3 className='text-4xl font-semibold m-6'>Fruits</h3>
      <input type="text" onChange={(e)=>{
        setName(e.target.value)
      }} value={name} className='border h-8 mx-3 px-2 w-50' placeholder='Enter fruits...'/>

      <button onClick={()=>{setFruits([...fruits,name]) ,setName("")} } className='border-1 px-2 py-1 rounded-lg bg-yellow-400 cursor-pointer'>Add</button>
      
      <ul className='list-inside list-disc px-3'>
        {fruits.map((fruit,idx)=>( <li key={idx}>{fruit}</li>))}
      </ul>

    </div>
  )
}
