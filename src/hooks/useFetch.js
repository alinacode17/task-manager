import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(url)
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
    }, [url])

    return { data, isPending, error }
}

export default useFetch;