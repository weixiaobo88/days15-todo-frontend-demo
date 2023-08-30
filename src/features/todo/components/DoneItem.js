import { useDispatch } from "react-redux";
import { removeTodoTask } from "../todoSlice";
import '../css/DoneItem.css';
import { useNavigate } from "react-router-dom";
export default function DoneItem(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleTaskTextClick = () => {
        navigate('/done/'+ props.task.id);
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