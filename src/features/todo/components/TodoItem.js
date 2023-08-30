import { useDispatch } from "react-redux";
import { resetTodoTask } from "../todoSlice";
import '../css/TodoItem.css';
import * as todoApi from "../../../api/todoApi";

export default function TodoItem(props) {
    const dispatch = useDispatch();

    const handleTaskTextClick = async () => {
        await todoApi.updateTodoTask(props.task.id, {done: !props.task.done})
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
    }

    const hanlleRemoveButtonClick = async () => {
        if(window.confirm('Are you sure you wish to delete this item?')) {
            await todoApi.deleteTodoTask(props.task.id);
            const response = await todoApi.getTodoTasks()
            dispatch(resetTodoTask(response.data));
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