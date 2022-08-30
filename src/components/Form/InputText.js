import PropTypes from "prop-types";

const InputText = (props) => {
    return (
        <div className="form-element">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                type="text"
                placeholder={props.label}
                onChange={props.onChange}
            />
            {props.errors.hasOwnProperty(props.id) && props.errors[props.id] ? (
                <div role="alert" className="error-msg">{props.errors[props.id]}</div>
            ) : null}
        </div>
    )
}

InputText.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.any,
    onChange: PropTypes.func.isRequired
};

export default InputText;
