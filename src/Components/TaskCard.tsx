import React from "react";
import { Task } from './model'

const TaskCard = (props: Task) => {
  return (
      <div className='card mt-1'>
        <div className='card-header'>
          <h5>{props.Title}</h5>
        </div>
        <div className='card-body'>
          <p>{props.Description}</p>
          <p>{props.Status}</p>
        </div>
      </div>
  )
}

export default TaskCard