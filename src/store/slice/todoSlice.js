
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk('FetchTodos', async () => {
    const apiResponse = await fetch("https://dummyjson.com/todos")
    const result = await apiResponse.json()
    return result;
})

const initialState = {
    todoList: [],
    loading : false,
    todoListFromApi : [],
    isError : false
}

const todoReducer = createSlice({
    name: 'TODO APP',
    initialState: initialState,
    reducers: {
        addTodo(state, action) {
            state.todoList.push(action.payload)
            return state;
        },

        deleteTodo(state, action) {
            const currentState = state.todoList
            const updatedtodo = currentState.filter((todo) => {
                if (todo == action.payload) return false;
                return true;
            })
            state.todoList = updatedtodo
            return state;
        },

        updatedtodo(state, action) {
            state.todoList = state.todoList.map((todo) => {
                if (todo == action.payload.item) {
                    return action.payload.updateItem;

                }
                return todo;
            })
        }

    },
    extraReducers : (builder)=>{
        builder.addCase(fetchTodos.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.loading = false;
            console.log(action.payload.todos)
            state.todoListFromApi = action.payload.todos
        })
        builder.addCase(fetchTodos.rejected,(state )=>{
            state.loading = false
            state.isError = true
        })
    }
})

export const { addTodo, deleteTodo, updatedtodo } = todoReducer.actions

export default todoReducer.reducer
