import React from 'react'
import Header from './Components/Header'
import TodoCart from './Components/TodoCart';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todo'
import { nanoid } from '@reduxjs/toolkit';


function App() {
  const todos = useSelector((state) => state.todo.todos)
  
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      id: nanoid(),
      todo: event.target.todo.value,
      date: event.target.date.value,
      isComplete: false,
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="container my-5">
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <ul className="list-group todoListGroup row flex-row">
              {todos?.map((x, y) => {
                return (
                  <TodoCart data={x} key={y} />
                )
              })}
            </ul>
          </div>
          <div className="col-lg-4">
            <form id="myform" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input className="form-control" required type="text" name="todo" placeholder="enter todo" />
              </div>
              <div className="form-group">
                <input className="form-control" required type="date" name="date" placeholder="enter date" />
              </div>
              <div className="form-group text-end">
                <button type="submit" className="btn btn-primary">Enter Todo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App