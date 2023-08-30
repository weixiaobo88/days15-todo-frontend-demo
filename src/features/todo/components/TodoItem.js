import { useDispatch } from "react-redux";
import { removeTodoTask, updateTodoTaskStatus } from "../todoSlice";
import '../css/TodoItem.css';

export default function TodoItem(props) {
    const dispatch = useDispatch();

    const handleTaskTextClick = () => {
        if(props.isDone) {
            //TODO: go to the detail page
            console.log(" go to the detail page");
        } else {
            dispatch(updateTodoTaskStatus({ id:props.task.id, done: !props.task.done }));
        }
    }

    const hanlleRemoveButtonClick = () => {
        if(window.confirm('Are you sure you wish to delete this item?')) {
            dispatch(removeTodoTask(props.task.id));
        }
    }

    return(
        <div className='todo-item'>
            <div className={`task-text ${ props.task.done ? 'done' : ''}`}
                 onClick={handleTaskTextClick}>{props.task.text}</div>
            <div className='remove-button'  onClick={hanlleRemoveButtonClick}>x</div>
        </div>
    );
}