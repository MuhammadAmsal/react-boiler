import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../redux/slice'
export default function Todos() {
    const todos=useSelector(state=> state.todos)
    const dispatch=useDispatch()
    console.log(todos)
  return (
    <>
     <div>
     <p className='' >Todos</p>  
    </div>
    {todos.map((todo)=>(
        <li key={todo.id} >
            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))} >remove</button>
        </li>
    ))}
    </>
    
  )
}
