import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../reducers/todoSlice";

export default function TodoGenerator() {
    const [taskName, setTaskName] = useState("");
    const dispatch = useDispatch();
    
    const handleTaskNameChange = (e) => {
        const value = e.target.value;
        setTaskName(value);
    }
    return(
        <div className='todo-generator'>
            <input placeholder='input a new todo here...' onChange={handleTaskNameChange}></input>
            <button onClick={() => dispatch(create({name:taskName})
            )}> Add </button>
        </div>
    );
}