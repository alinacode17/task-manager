import { useContext, useState, useMemo, useEffect } from 'react';
import { TaskViewerContext } from '../contexts/tasksContext';
import axios from 'axios';
import debounce from "lodash.debounce";

const Search = ({ setData }) => {
    const { setTaskStatus } = useContext(TaskViewerContext);
    const [minCharError, setMinCharError] = useState(false);
    const [noResultsError, setNoResultsError] = useState(false);

    let cancelToken;

    const removeErrors = () => {
        setMinCharError(false);
        setNoResultsError(false);
    };

    const handleChange = (e) => {
        // Check if there are any previous pending requests
        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Operation canceled due to new request.")
        }

        // Save the cancel token for the current request
        cancelToken = axios.CancelToken.source();

        if (e.target.value.trim().length >= 2) {
            setMinCharError(false);
            setNoResultsError(false);
            axios.get(`http://localhost:5000/tasksCollection?q=${e.target.value.toLowerCase()}`,
                { cancelToken: cancelToken.token }
            )
                .then((response) => {
                    if (response.data.length > 0) {
                        console.log(response.data);
                        setData(response.data);
                        setNoResultsError(false);
                    } else {
                        console.log(response.data);
                        console.log('no results, call the list');
                        setTaskStatus('change');
                        setNoResultsError(true);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            setMinCharError(true);
            setNoResultsError(false);
            setTaskStatus('change2');
            axios.get('http://localhost:5000/tasksCollection')
                .then(response => {
                    console.log(response);
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
            console.log('if no input value, call again all the list');
        }
    };

    // debouncing search
    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 300);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    return (
        <>
            <div className="search__fields-container">
                <div className="search__bar" role="search">
                    <div className="search__bar-input">
                        <label htmlFor="search">Search tasks</label>
                        <div className="search__bar-input-container">
                            <input type="text" onChange={debouncedResults} onBlur={removeErrors} id="search" placeholder="Search Tasks" role="searchbox" />
                            <span className="search__bar-input-icon" aria-hidden="true">
                                <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.43463 10.8425C8.45814 11.5379 7.26355 11.9469 5.97343 11.9469C2.6744 11.9469 0 9.27252 0 5.97347C0 2.67441 2.6744 0 5.97343 0C9.27247 0 11.9469 2.67441 11.9469 5.97347C11.9469 7.26354 11.5379 8.4581 10.8426 9.43457L16 14.592L14.592 16L9.43463 10.8425ZM9.95572 5.97347C9.95572 8.17284 8.17279 9.95578 5.97343 9.95578C3.77408 9.95578 1.99114 8.17284 1.99114 5.97347C1.99114 3.7741 3.77408 1.99116 5.97343 1.99116C8.17279 1.99116 9.95572 3.7741 9.95572 5.97347Z" fill="#1F2532"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {minCharError && <div className="search__error-msg">
                Please type 2 or more characters
            </div>}
            {noResultsError && <div className="search__error-msg">
                No results, please try again
            </div>}
        </>
    )
}

export default Search;
