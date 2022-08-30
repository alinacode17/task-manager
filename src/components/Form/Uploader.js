import PropTypes from "prop-types";

const Uploader = (props) => {
    return (
        <div className="form-element">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="file"
                name={props.id}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
            {props.errors.hasOwnProperty(props.id) && props.errors[props.id] ? (
                <div role="alert" className="error-msg">{props.errors[props.id]}</div>
            ) : null}
        </div>
    )
}

Uploader.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    error: PropTypes.any,
    onChange: PropTypes.func.isRequired,
};

export default Uploader;
