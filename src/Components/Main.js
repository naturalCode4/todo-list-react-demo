import React, { useState } from 'react'
import ListDisplay from './ListDisplay'
//destructuring useState from react. Its a hook.
const Main = () => {

  //square brackets is a way of destructuring. not sure what's going on
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, {task: task, category: category}])
    setTask('')
  }

  console.log(list)

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='task to perform' onChange={(e) => handleChange(e)} value={task}></input>
        <select onChange = {(e) => setCategory(e.target.value)}>
          <option defaultValue disabled selected>category</option>
          <option value='Chores'>Chores</option>
          <option value='Wellness-Practices'>Wellness Practices</option>
          <option value='Work'>Work</option>
        </select>
        <button type='submit'>Add to list</button>
      </form>
      <ListDisplay list={list} setList={setList}/>
    </div>
  )
}

export default Main