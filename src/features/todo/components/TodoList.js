import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import '../css/TodoList.css';
import { useEffect } from "react";
import * as todoApi from "../../../api/todoApi";
import { useDispatch } from "react-redux";
import { resetTodoTask } from "../todoSlice";

export default function TodoList() {
    const dispatch = useDispatch();
    useEffect(() => {
        todoApi.getTodoTasks().then( response => {
            dispatch(resetTodoTask(response.data));
        });
    }, []);

    return (
        <div className='todo-list'>
            <h1>Todo List</h1>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}