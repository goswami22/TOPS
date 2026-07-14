import React from 'react'
import TodoList from './redux/TodoList'
import AddData from './redux/AddData'

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddData/>
      <TodoList/>
    </div>
  )
}

export default App
