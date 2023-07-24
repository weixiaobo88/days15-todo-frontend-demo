import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            {  id: 'd11839f8-3de0-4e9f-8c51-e07dfb76223f', name: "Clean the room", status: "Completed" },
            {  id: '03b80cf0-d22d-4d2b-bfa6-837b1c14ebd7', name: "Learn React", status: "Completed" },
            {  id: '7ebd6f46-e110-4b2d-bc59-80a112e078ed', name: "Schedule a meeting", status: "To be done" },
            {  id: 'dbfd58f1-6313-4af4-88e1-188655b40196', name: "Reply to emails", status: "To be done" },
            {  id: 'ed2b3d96-ff31-4ff0-ae70-a23dfabc6d37', name: "Meet a friend", status: "To be done" },
        ]
    },
    reducers: {
        create: (state, action) => {
            state.tasks = [...state.tasks, { id:uuidv4(), ...action.payload,  status: "To be done" }]
        }
    }
})

export const { create } = todoSlice.actions
export default todoSlice.reducer