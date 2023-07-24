export default function TodoItem(props) {
    const { task } = props;
    return(
        <div className='todo-item'>
            <div className='task-name'>{task.name}</div>
            <div className='remove-button'>x</div>
        </div>
    );
}