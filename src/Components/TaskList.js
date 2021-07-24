import React from 'react'
import Task from './Task'

const TaskList = ({tasks,setTasks}) => {

    return (
        <div>
            {
                tasks.map((task)=>(
                <Task tasks={tasks} task={task} setTasks={setTasks} />
                ))
            }
            
        </div>
    )
}

export default TaskList
