import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {

  const giaphu = "Phu";
  const age = 25;
  const data = {
    address: "hcm",
    country: "vietnam"
  }
  // {key: value}

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
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

      />
      <div className='todo-image' >
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
