import useFetch from '../hooks/useFetch';
import Form from './Form/Form';
import TaskComponent from './TaskComponent';

const TaskItem = ({ taskId }) => {
    const { data: task, isPending, error } = useFetch(`http://localhost:5000/taskItems/${taskId}`);
    const { name, subHeading, requiresSubmit } = task;

    return (
        <>
            {!isPending && !error &&
                <div>
                    <h2>{name}</h2>
                    <p>{subHeading}</p>

                    {
                        requiresSubmit &&
                        <Form formData={task} />
                    }

                    {
                        !requiresSubmit &&
                        <TaskComponent data={task} />
                    }
                </div>
            }
        </>
    )
}

export default TaskItem;
