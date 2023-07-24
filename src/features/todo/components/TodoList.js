import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

export default function TodoList() {
    return(
        <div className='todo-list'>
            <h1>Todo List</h1>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}