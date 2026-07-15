import React from 'react'

export default function ToDoBox({todo}) {
  return (
    <div className='border m-3 h-auto w-120 flex justify-between px-3 rounded-xl items-center p-3'>
      
      <span className=''>{todo.id} . </span>
      <span className='font-semibold w-[60%] overflow-hidden'>{todo.todo} </span>
      <span className={`text-xl ${todo.completed ? "text-green-500" : "text-pink-500" } `}>{todo.completed ? "completed" : "pending"}</span>
    </div>
  )
}
