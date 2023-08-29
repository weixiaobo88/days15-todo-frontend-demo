import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            { id: 'd11839f8-3de0-4e9f-8c51-e07dfb76223f', text: "Clean the room", done: true },
            { id: '03b80cf0-d22d-4d2b-bfa6-837b1c14ebd7', text: "Learn React", done: true },
            { id: '7ebd6f46-e110-4b2d-bc59-80a112e078ed', text: "Schedule a meeting", done: false },
            { id: 'dbfd58f1-6313-4af4-88e1-188655b40196', text: "Reply to emails", done: false },
            { id: 'ed2b3d96-ff31-4ff0-ae70-a23dfabc6d37', text: "Meet a friend", done: false },
        ]
    },
    reducers: {
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

export const { createTodoTask, updateTodoTaskStatus, removeTodoTask } = todoSlice.actions
export default todoSlice.reducer