import { createSlice } from '@reduxjs/toolkit'
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