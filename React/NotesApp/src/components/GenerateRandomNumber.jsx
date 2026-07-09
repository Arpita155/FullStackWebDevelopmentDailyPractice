import React from 'react'
import { useState } from 'react'

export default function GenerateRandomNumber() {

    const [value, setValue] = useState(null)

  return (
    <div>
        
        <button className='border-1 mt-10 mx-6 w-25 h-8 rounded bg-blue-300 font-semibold ' onClick={(e)=>{setValue(Math.floor(Math.random()*100000))}}>Generate</button>
        <div className='mx-4 mt-5 border-1 w-60 h-10 flex justify-center items-center rounded bg-amber-300'>Random Number :  <span className='font-semibold pl-1'>{value}</span></div>
        
    </div>
  )
}
