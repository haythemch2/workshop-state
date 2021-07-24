import React,{useState} from 'react'
import { Form ,Button} from 'react-bootstrap'

function AddTask({tasks,setTasks}) {
 
    const [toAddTask, setToAddTask] = useState(
        {
            id:Date.now(),
            description:'',
            isDone:false
    })
    
   const handleAdd=()=>{
       setTasks([...tasks,toAddTask])
   }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control onChange={(event)=>setToAddTask({...toAddTask,description:event.target.value})} as='textarea' row={1}></Form.Control>
                    <Button variant="info" onClick={()=>handleAdd()}>ADD !</Button>
                </Form.Group>
            </Form>
            
        </div>
    )
}

export default AddTask
