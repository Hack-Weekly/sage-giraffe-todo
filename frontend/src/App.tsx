import './App.css'
import Add from './components/add'
import Filter from './components/filter'
import TodoList from './components/todo-list'

function App() {

  const todos = [
    {
      id: 1,
      label: 'Create a todo app',
      isDone: false,
    },
    {
      id: 2,
      label: 'Make a figma design',
      isDone: true,
    },
    {
      id: 3,
      label: 'Frontend tasks',
      isDone: false,
    },
    {
      id: 4,
      label: 'Backend tasks',
      isDone: false,
    },
  ]

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Filter />
      <Add />
      <TodoList todos={ todos } />
    </div>
  )
}

export default App
