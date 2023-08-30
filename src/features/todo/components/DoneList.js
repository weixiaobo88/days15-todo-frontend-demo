import DoneGroup from "./DoneGroup";
import '../css/DoneList.css';

export default function DoneList(props) {
    return (
        <div className='todo-list'>
            <h1>Done List</h1>
            <DoneGroup />
        </div>
    );
}