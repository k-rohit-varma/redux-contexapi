import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, updatedtodo } from "../store/slice/todoSlice"

const Todo = () => {

    const [currentTodo, setCurretTodo] = useState("")
    const [upateTodo , setUpdateTodo] = useState("")
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todo.todoList)
    function handleSubmit() {
        dispatch(addTodo(currentTodo))
        setCurretTodo("")
    }

    function handleDelete(item)
    {
        dispatch(deleteTodo(item))
    }
    const haldleUpdate =(item)=>{
        const payload = {
            item : item,
            updateItem : upateTodo
        }
        dispatch(updatedtodo(payload))
    }
    return (
        <>
            <h1>Add todo</h1>
            <input type="text" value={currentTodo} onChange={
                e => setCurretTodo(e.target.value)
            }  ></input>
            <button onClick={handleSubmit} >Add this todo</button>
            {
                todoList.length > 0 ? todoList.map((item) => {
                    return <div>

                        <li key={Math.ceil(Math.random()*10)} >{item}</li>
                        <button  onClick={()=>  handleDelete(item)} >delete</button>
                        <p>update todo</p>
                        <input type="text" value={upateTodo} onChange={e=>setUpdateTodo(e.target.value)}  ></input>
                        <button onClick={()=> haldleUpdate(item)} > update todo </button>
                    </div>
                }) : <h1>no todos currently available</h1>
            }
        </>
    )
}

export default Todo
