import React from 'react'
import {Alert, Button} from 'react-bootstrap'

function Task({tasks,task,setTasks}) {

    var newTasks = []

    
    const handleDone=()=>{
         newTasks = tasks.map((el)=>
            el.id === task.id ? {...el,isDone : !el.isDone} : el
        )
        setTasks(newTasks)
    }

    const handleDelete=()=>{
        newTasks = tasks.filter((el)=>
        el.id !== task.id)
        setTasks(newTasks)
    }

    return (
        <div>
            <Alert key={task.id} variant={task.isDone?"success":"danger"}>{task.description}
            <Button variant={!task.isDone?"success":"danger"}
            onClick={()=>handleDone()}>Done!</Button>
            <Button variant='danger' onClick={()=>handleDelete()}>Delete</Button>
            </Alert>
        </div>
    )
}

export default Task
