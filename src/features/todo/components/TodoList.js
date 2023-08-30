import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import '../css/TodoList.css';

export default function TodoList() {
    return (
        <div className='todo-list'>
            <h1>Todo List</h1>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}