"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(task)
    console.log(desc)
    setmainTask([...mainTask,{task,desc}])
    settask("")
    setdesc("")
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available!</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (<div className='flex justify-between mb-5'>
          <h5 className='font-3xl'>{t.task}</h5>
          <h6 className='font-2xl'>{t.desc}</h6>
          <button onClick={()=>{
            deleteHandler();
          }} className='bg-red-700 text-black px-4 py-2 rounded '>Delete</button>
        </div>
      )
    })
  }

  return (
    <div className='container'>
      <h1 className='bg-black text-white p-5 text-3xl text-bold text-center'>Todo List App</h1>
      <div>
        <form onSubmit={submitHandler}>
          <input 
           type="text"
           className='text-2xl border-zinc-800 border-4 m-7 px-4 py-2' 
           placeholder='Enter your task'
           value={task}
           onChange={(e)=>{
            settask(e.target.value)
           }}
          />
          <input 
           type="text"
           className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
           placeholder='Enter your Description'
           value={desc}
           onChange={(e)=>{
            setdesc(e.target.value)
           }}
          />
          <button className='bg-blue-600 text-green-200 px-4 py-3 text-bold rounded'>ADD TASK</button>
        </form>
        <hr />
        <div className='p-8 text-center bg-slate-300 text-2xl'>
          {renderTask}
        </div>
      </div>
      
    </div>
  )
}

export default page