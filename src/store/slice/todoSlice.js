
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: []
}

const todoReducer = createSlice({
    name: 'TODO APP',
    initialState: initialState,
    reducers: {
        addTodo(state, action) {
            state.todoList.push(action.payload)
            return state;
        },

        deleteTodo(state,action)
        {
            const currentState = state.todoList
            const updatedtodo = currentState.filter((todo)=>{
                if(todo == action.payload) return false;
                return true;
            })
            state.todoList = updatedtodo
            return state;
        },

        updatedtodo(state,action)
        {
            state.todoList = state.todoList.map( (todo)=>{
                if( todo == action.payload.item)
                {
                    return action.payload.updateItem;

                }
                return todo;
            } )
        }

    }
})

export const { addTodo ,deleteTodo ,updatedtodo} = todoReducer.actions

export default todoReducer.reducer
