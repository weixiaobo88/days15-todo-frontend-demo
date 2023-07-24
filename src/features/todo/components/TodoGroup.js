import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux'

export default function TodoGroup() {
    const todoTasks = useSelector(state => state.todo.tasks)
    return (
        <div className='todo-group'>
            {todoTasks.map(((todoTask, index) =>
                <TodoItem key= {index} task={todoTask}></TodoItem>
            ))}
        </div>
    );
}