import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux'

export default function TodoGroup(props) {
    const todoTasks = useSelector(state => state.todo.tasks)
    return (
        <div className='todo-group'>
            {todoTasks.map(((todoTask) =>
                <TodoItem key={todoTask.id} task={todoTask}></TodoItem>
            ))}
        </div>
    );
}