import { useDispatch } from "react-redux";
import { removeTodoTask, updateTodoTaskCompletedStatus } from "../reducers/todoSlice";
export default function TodoItem(props) {
    const dispatch = useDispatch();
    const handleTaskNameClick = () => {
        dispatch(updateTodoTaskCompletedStatus({ id:props.task.id, completed: !props.task.completed }));
    }

    const hanlleRemoveButtonClick = () => {
        if(window.confirm('Are you sure you wish to delete this item?')) {
            dispatch(removeTodoTask(props.task.id));
        }
    }
    return(
        <div className='todo-item'>
            <div className={`task-name ${ props.task.completed ? 'done' : ''}`}
                 onClick={handleTaskNameClick}>{props.task.name}</div>
            <div className='remove-button'  onClick={hanlleRemoveButtonClick}>x</div>
        </div>
    );
}