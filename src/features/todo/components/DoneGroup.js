import DoneItem from "./DoneItem";
import { useSelector } from 'react-redux'

export default function TodoGroup(props) {
    const todoTasks = useSelector(state => state.todo.tasks)
    return (
        <div className='todo-group'>
            {todoTasks.filter(task => task.done).map((todoTask) =>
                <DoneItem key={todoTask.id} task={todoTask}></DoneItem>
            )}
        </div>
    );
}