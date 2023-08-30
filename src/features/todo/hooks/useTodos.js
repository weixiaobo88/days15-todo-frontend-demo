import * as todoApi from '../../../api/todoApi'
import { useDispatch } from 'react-redux';
import { resetTodoTask } from '../todoSlice'; 
export const useTodos = () => {
    const dispatch = useDispatch();

    async function loadTodos() {
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
    }

    const addTodo = async (text) => {
        await todoApi.addTodoTask({ text:text  })
        loadTodos();
    }

    const toggleTodo = async (id, task) => {
        await todoApi.updateTodoTask(id, {done: !task.done});
        loadTodos();
    }

    const deleteTodo = async (id) => {
        await todoApi.deleteTodoTask(id);
        loadTodos();
    }
    
    return {
        loadTodos,
        addTodo,
        toggleTodo,
        deleteTodo
    }
}