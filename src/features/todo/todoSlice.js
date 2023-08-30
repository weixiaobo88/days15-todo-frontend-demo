import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: []
    },
    reducers: {
        resetTodoTask: (state, action) => {
            state.tasks = action.payload
        }
    }
})

export const { resetTodoTask } = todoSlice.actions
export default todoSlice.reducer