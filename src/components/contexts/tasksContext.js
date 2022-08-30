import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const TaskViewerContext = createContext();

export const TaskViewerProvider = ({ children }) => {
    const [taskStatus, setTaskStatus] = useState('open');
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState('');

    // reload tasks list when we submit to update the status
    useEffect(() => {
        axios.get('http://localhost:5000/tasksCollection')
            .then(response => {
                console.log(response);
                setIsPending(false);
                setData(response.data);
            })
            .catch(error => {
                setIsPending(false);
                console.log(error);
                setError(error);
            })
    }, [taskStatus]);

    return (
        <TaskViewerContext.Provider
            value={{ taskStatus, setTaskStatus, data, setData, isPending, error }}>
            {children}
        </TaskViewerContext.Provider>
    )
}
