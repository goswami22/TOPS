import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todoList',
    initialState:{
        todo: ['Ajay', 'Raj']
    },
    reducers:{
        AddTodo: (state, action)=> {
            state.todo.push(action.payload)
        },

        DeleteTodo: (state, action)=> {
            state.todo = state.todo.filter((data, index)=> index != action.payload)
        }
        

        
    }
})


export const {AddTodo, DeleteTodo} = todoSlice.actions
export default todoSlice.reducer