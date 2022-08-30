import uuid from 'react-uuid';
import PropTypes from "prop-types";

const Select = (props) => {
    return (
        <div className="form-element">
            <div className="select">
                <label htmlFor={props.id}>{props.label}</label>
                <div className="select-container">
                    <select
                        className="select-menu"
                        id={props.id}
                        name={props.id}
                        value={props.value}
                        onChange={props.onChange}
                    >
                        <option value={""}>Please Select</option>
                        {
                            props.options.length > 0 &&
                            props.options.map((option) => (
                                <option key={uuid()} value={option.value}>{option.label}</option>
                            ))
                        }
                    </select>
                    <span className="select-arrow">
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.26906 0.209435L5.98337 5.06956L10.7317 0.209435C11.3645 -0.457416 12.4405 0.622131 11.8077 1.28946L6.42757 6.81451C6.20595 7.03696 5.7943 7.06867 5.57268 6.84622L0.191593 1.28946C-0.441195 0.622613 0.634832 -0.457415 1.26762 0.209435L1.26906 0.209435Z" fill="black" />
                        </svg>
                    </span>
                </div>
            </div>
            {props.errors.hasOwnProperty(props.id) && props.errors[props.id] ? (
                <div role="alert" className="error-msg">{props.errors[props.id]}</div>
            ) : null}
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    error: PropTypes.any,
    options: PropTypes.array,
    onChange: PropTypes.func.isRequired
};

export default Select;