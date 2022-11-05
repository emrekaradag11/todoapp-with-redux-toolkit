import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todoList')) ?? []
}

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [
                action.payload, // yeni geleni ekle
                ...state.todos, // mevcutları dahil et
            ]
            localStorage.setItem("todoList", JSON.stringify(state.todos))
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map(item => {
              if(item.id === action.payload) item.isComplete = true;
              return item
            })
            localStorage.setItem("todoList", JSON.stringify(state.todos))
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
            localStorage.setItem("todoList", JSON.stringify(state.todos))
        }
    }
})

export const { addTodo,completeTodo, deleteTodo } = todos.actions

export default todos.reducer