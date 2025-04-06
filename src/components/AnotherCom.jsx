import { useSelector } from "react-redux"

const AnotheCom = ()=>{

    const todoList = useSelector(state => state.todo.todoList)
    return(
        <>
            <h1> this is another component </h1>
            {
                todoList.length>0 ? <h1>todo are present</h1> : <p>todo are not comming</p>
            }
        </> 
    )
}
export default AnotheCom