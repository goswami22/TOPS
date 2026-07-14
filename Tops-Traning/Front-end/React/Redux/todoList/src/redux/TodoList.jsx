import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo } from './todoSlice'

function TodoList() {

    const mydata =useSelector((mystore)=> mystore.todostore.todo)
    const dispatch= useDispatch()
  return (
    <div>
        
        <ul>
            {
                mydata.map((data, index)=>{
                    return(
                        <li key={index}>{data}<button onClick={()=> dispatch(DeleteTodo(index))}>Delete</button><button>Edit</button></li>

                    )    
                })
            }
        </ul>


    </div>
  )
}

export default TodoList
