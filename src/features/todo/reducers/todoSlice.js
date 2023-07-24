import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            {  id: 1, name: "Clean the room", status: "Completed" },
            {  id: 2, name: "Learn React", status: "Completed" },
            {  id: 3, name: "Schedule a meeting", status: "To be done" },
            {  id: 4, name: "Reply to emails", status: "To be done" },
            {  id: 5, name: "Meet a friend", status: "To be done" },
        ]
    },
    reducers: {
    }
})
export default todoSlice.reducer