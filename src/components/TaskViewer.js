import { useContext } from 'react';
import { TaskViewerContext } from './contexts/tasksContext';
import Search from './Form/Search';
import Tasks from './Tasks';

const TaskViewer = () => {
    const { data, setData, isPending, error } = useContext(TaskViewerContext);

    return (
        <>
            <Search setData={setData} />
            {
                isPending && <div>Loading...</div>
            }
            {
                error.length > 0 && <div>{error}</div>
            }
            {
                !isPending && error.length === 0 && data.length > 0 &&
                <Tasks tasks={data} />
            }
        </>
    )
}

export default TaskViewer;

