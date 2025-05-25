"use client"
import React, { useState } from 'react'

function page() {
  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {value, desc}])
    setDesc("")
    setValue("")
  }
  const [value, setValue] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])

  const deleteHandler = (i) =>{
    let copyArray = [...mainTask]
    copyArray.splice(i,1)
    setMainTask(copyArray)
  }

  const completeHandler = (i) =>{
      const taskToComplete = mainTask[i];
      setCompletedTask([...completedTask, taskToComplete]);
      mainTask.splice(i,1)
  }
  let renderCompleted = 'No task Completed'
  if(completedTask.length>0){
    renderCompleted = completedTask.map((c,i)=>{
      return(
        <li key={i}>
          <h3>{c.value}</h3>
          <h4>{c.desc}</h4>
        </li>
      )
    })
  }
  let renderTask = 'No tasks Avaliable'
  if (mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i}>
          <div className='flex justify-between'>
            <h5 className='text-3xl p-5'>{t.value}</h5>
            <h6 className='text-2xl p-5 pr-5'>{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }}>
            Delete
          </button>
          <button onClick={()=>{
            completeHandler(i)
          }}>
            Complete
          </button>
        </li>
      );
    });
  }
  return (
    <>
    <h1>My Todo List</h1>
    <form onSubmit={submitHandler} className='flex-row justify-items-center'>
      <input className='bg-amber-50 m-5 p-5'
        placeholder='Enter Task'
        value={value}
        onChange={(e)=>
        {
          setValue(e.target.value)
        }
        }
        
      />
      <input
        placeholder='Add Description'
        className='bg-amber-100 p-10 m-5'
        value={desc}
        onChange={(e)=>
          {
          setDesc(e.target.value)
          }
        }
      />
      <button className='bg-green-600 p-5 rounded border-2'>Submit</button>
    </form>
    <div>
      <ul>{renderTask}</ul>
    </div>
    <hr></hr>
    <div>
      <ul>{renderCompleted}</ul>
    </div>
    </>
  )
}

export default page