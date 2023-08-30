import '../css/TodoItem.css';
import { useTodos } from "../hooks/useTodos";

export default function TodoItem(props) {
    const {toggleTodo, deleteTodo} = useTodos();
    const handleTaskTextClick = async () => {
        toggleTodo(props.task.id, props.task);
    }
    
    const hanlleRemoveButtonClick = async () => {
        if(window.confirm('Are you sure you wish to delete this item?')) {
            deleteTodo(props.task.id);
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