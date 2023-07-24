import { useDispatch } from "react-redux";
import { update } from "../reducers/todoSlice";
export default function TodoItem(props) {
    const dispatch = useDispatch();
    const handleClickTaskName = () => {
        dispatch(update({ id:props.task.id, completed: !props.task.completed }));
    }
    return(
        <div className='todo-item'>
            <div className={`task-name ${ props.task.completed ? 'done' : ''}`}
                 onClick={handleClickTaskName}>{props.task.name}</div>
            <div className='remove-button'>x</div>
        </div>
    );
}