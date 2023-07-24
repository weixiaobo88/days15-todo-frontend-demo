import TodoItem from "./TodoItem";
import todoTasks from "../../../data/TodoTasks";

export default function TodoGroup() {
    return (
        <div className='todo-group'>
            {todoTasks.map((todoTask =>
                <TodoItem task={todoTask} ></TodoItem>
            ))}
        </div>
    );
}