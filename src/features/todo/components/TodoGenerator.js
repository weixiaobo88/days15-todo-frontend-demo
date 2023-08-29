import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoTask } from "../todoSlice";

import '../css/TodoGenerator.css';

export default function TodoGenerator() {
    const [taskText, setTaskText] = useState("");
    const dispatch = useDispatch();

    const handleTaskTextChange = (e) => {
        const value = e.target.value;
        setTaskText(value);
    }

    const handleAddTodoTask = () => {
        dispatch(createTodoTask({ text: taskText }));
        setTaskText("");
    }
    return (
        <div className='todo-generator'>
            <input placeholder='input a new todo here...' onChange={handleTaskTextChange} value={taskText}></input>
            <button onClick={handleAddTodoTask} disabled={!taskText} > Add </button>
        </div>
    );
}