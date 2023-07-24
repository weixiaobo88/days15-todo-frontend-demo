import TodoItem from "./TodoItem";
import todoTasks from "../../../data/TodoTasks";

export default function TodoGroup() {
    return (
        <div className='todo-group'>
            {todoTasks.map(((todoTask, index) =>
                <TodoItem key= {index} task={todoTask}></TodoItem>
            ))}
        </div>
    );
}