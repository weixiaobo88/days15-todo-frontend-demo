import { useDispatch } from "react-redux";
import { removeTodoTask, updateTodoTaskStatus } from "../todoSlice";
import '../css/TodoItem.css';

export default function TodoItem(props) {
    const dispatch = useDispatch();

    const handleTaskNameClick = () => {
        dispatch(updateTodoTaskStatus({ id:props.task.id, done: !props.task.done }));
    }

    const hanlleRemoveButtonClick = () => {
        if(window.confirm('Are you sure you wish to delete this item?')) {
            dispatch(removeTodoTask(props.task.id));
        }
    }

    return(
        <div className='todo-item'>
            <div className={`task-name ${ props.task.done ? 'done' : ''}`}
                 onClick={handleTaskNameClick}>{props.task.name}</div>
            <div className='remove-button'  onClick={hanlleRemoveButtonClick}>x</div>
        </div>
    );
}