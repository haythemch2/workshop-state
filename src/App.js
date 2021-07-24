import {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';

function App() {

  const [tasks, setTasks] = useState([{
    id:1,
    description:"task 1 description",
    isDone:false
  },{
    id:2,
    description:"task 2 description",
    isDone:false
  },{
    id:3,
    description:"task 3 description",
    isDone:false
  },])
  

  return (
    <div className="App">
    <TaskList  tasks={tasks} setTasks={setTasks} />
    <AddTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
