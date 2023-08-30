import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux'

export default function TodoGroup(props) {
    const todoTasks = useSelector(state => state.todo.tasks)
    return (
        <div className='todo-group'>
            {(props.isDone ? todoTasks.filter(task => task.done) : todoTasks).map(((todoTask) =>
                <TodoItem key={todoTask.id} task={todoTask} isDone={props.isDone}></TodoItem>
            ))}
        </div>
    );
}