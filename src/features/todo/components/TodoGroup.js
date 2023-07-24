import TodoItem from "./TodoItem";

export default function TodoGroup() {
    return (
        <div className='todo-group'>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    );
}