import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodos] = useState([
    {id: 1, name: "Learning react"},
    {id: 1, name: "Watch Youtube"}
  ])

  const giaphu = "Phu";
  const age = 25;
  const data = {
    address: "hcm",
    country: "vietnam"
  }
  // {key: value}

  const addNewTodo = (name) => {
    const newTodo ={
      id: randomIntFromInterval(1, 100000000),
      name: name
    }
    setTodos([...todoList, newTodo])
  }

  Math.random()

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />

      <TodoData
        name={giaphu}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image' >
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
