import React, { useState } from 'react'

export default function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")

    let x = 10;
    

  return (
    <div>
      
      <input type="text" className='border border-1 h-10 w-70 p-2' placeholder='Name..' onChange={(e)=>{setName(e.target.value)}} /> <br />
      <input type="text" className='border border-1 mt-2 h-10 w-70 p-2' placeholder='Email..' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
      <input type="text" className='border border-1 mt-2 h-10 w-70 p-2' placeholder='Password..' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
      <input type="text" className='border border-1 mt-2 h-10 w-70 p-2' placeholder='City..' value={city} onChange={(e)=>{setCity(e.target.value)}} /> <br />
      <button onClick={console.log(x)} className='border boder-1 mt-2 w-20'>Increase</button>
    

      <div className='border boder-1 mt-10 mx-20 w-90 p-4'>
          <ul>
          <li>Name : {name}</li>
          <li>Email : {email}</li>
          <li>Password : {password}</li>
          <li>City :{city}</li>
        </ul>
      </div>
      

    </div>
  )
}
