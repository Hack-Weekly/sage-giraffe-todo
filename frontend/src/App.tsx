import React from 'react'
import './App.css'
import useTodoStore from './app/todoStore'
import Add from './components/add'
import Filter from './components/filter'
import TodoList from './components/todo-list'

function App() {
  
  const { todos, filter, fetch, addTodo, setFilter} = useTodoStore()

  React.useEffect(() => {
    fetch()
  }, [])

  const onAdd = (label: string) => {
    const maxId = todos.reduce((acc, todo) => acc < todo.id ? todo.id : acc, 1)
    addTodo({
      id: maxId + 1,
      label,
      isDone: false,
    })
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Filter onChange={ setFilter } />
      <Add onSubmit={ onAdd } />
      <TodoList todos={ todos.filter(todo => {
        return filter == 'done' ?
            todo.isDone
            : (filter == 'to-do' ?
                !todo.isDone
                : true)
      }) } />
    </div>
  )
}

export default App
