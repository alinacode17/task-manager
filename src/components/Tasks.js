import { useState, useEffect } from 'react';
import TasksList from './TaskList';
import TaskItem from './TaskItem';

const Tasks = ({ tasks }) => {
    const [taskItem, setTaskItem] = useState(tasks[0].id);

    useEffect(() => {
        setTaskItem(tasks[0].id);
    }, [tasks]);

    return (
        <section role="main" className="tasks">
            {
                tasks.length > 0 &&
                <div className="tasks__container">
                    <TasksList tasks={tasks} setTaskItem={setTaskItem} />
                    <TaskItem taskId={taskItem} />
                </div>
            }
        </section>
    )
};

export default Tasks;
