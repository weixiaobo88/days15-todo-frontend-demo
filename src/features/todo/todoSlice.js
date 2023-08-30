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
        },
        createTodoTask: (state, action) => {
            state.tasks = [...state.tasks, { id: uuidv4(), ...action.payload, done: false }]
        },
        updateTodoTaskStatus: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { id: task.id, text: task.text, done: action.payload.done }
                }
                return task;
            })
        },
        removeTodoTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const { createTodoTask, updateTodoTaskStatus, removeTodoTask, resetTodoTask } = todoSlice.actions
export default todoSlice.reducer