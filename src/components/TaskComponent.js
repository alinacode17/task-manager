import uuid from 'react-uuid';

const TaskComponent = ({ data }) => {
    return (
        <div>
            {
                data.fields.map((field) => (
                    <p key={uuid()}>{field.content}</p>
                ))
            }
        </div>
    )
}

export default TaskComponent;
