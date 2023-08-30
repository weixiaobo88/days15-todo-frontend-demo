import { useState } from "react";
import '../css/TodoGenerator.css';
import { useTodos } from "../hooks/useTodos";
import { Button, Input } from "antd"
export default function TodoGenerator() {
    const [taskText, setTaskText] = useState("");

    const { addTodo} = useTodos();
    const handleTaskTextChange = (e) => {
        const value = e.target.value;
        setTaskText(value);
    }

    const handleAddTodoTask = async () => {
        addTodo(taskText);
        setTaskText("");
    }
    return (
        <div className='todo-generator'>
            <Input placeholder='input a new todo here...' onChange={handleTaskTextChange} value={taskText}></Input>
            <Button type="primary" onClick={handleAddTodoTask} disabled={!taskText} > Add </Button>
        </div>
    );
}