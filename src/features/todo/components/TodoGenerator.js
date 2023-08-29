import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoTask } from "../todoSlice";

import '../css/TodoGenerator.css';

export default function TodoGenerator() {
    const [taskName, setTaskName] = useState("");
    const dispatch = useDispatch();

    const handleTaskNameChange = (e) => {
        const value = e.target.value;
        setTaskName(value);
    }

    const handleAddTodoTask = () => {
        dispatch(createTodoTask({ name: taskName }));
        setTaskName("");
    }
    return (
        <div className='todo-generator'>
            <input placeholder='input a new todo here...' onChange={handleTaskNameChange} value={taskName}></input>
            <button onClick={handleAddTodoTask} disabled={!taskName} > Add </button>
        </div>
    );
}