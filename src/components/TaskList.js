import uuid from 'react-uuid';

const TaskList = ({ tasks, setTaskItem }) => {

    const handleOnClick = (id) => {
        setTaskItem(id);
    }

    return (
        <ul className="tasks__list">
            {
                tasks.map((task) => (
                    <li key={uuid()} className="tasks__list-item" onClick={() => handleOnClick(task.id)}>
                        <h3 className="tasks__list-item-heading">{task.name}</h3>
                        <p className="tasks__list-item-subheading">{task.subHeading}</p>
                        <p className={`tasks__list-item-status ${task.status === "completed" ? "tasks__list-item-status--completed" : ""}`}>
                            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.2002" cy="12" r="10" fill={task.status === "completed" ? "#448E01" : "red"} />
                            </svg>
                            {task.status}
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}

export default TaskList;
