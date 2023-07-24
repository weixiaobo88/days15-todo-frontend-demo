import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../reducers/todoSlice";

export default function TodoGenerator() {
    const [taskName, setTaskName] = useState("");
    const tasks = useSelector(state => state.todo.tasks);
    const dispatch = useDispatch();
    
    const handleTaskNameChange = (e) => {
        const value = e.target.value;
        setTaskName(value);
    }
    return(
        <div className='todo-generator'>
            <input placeholder='input a new todo here...' onChange={handleTaskNameChange}></input>
            <button onClick={() => dispatch(
                create({
                    id: Math.max(...tasks.map(task=>task.id)) + 1,
                    name:taskName,
                    status: "To be done"
                })
            )}> Add </button>
        </div>
    );
}