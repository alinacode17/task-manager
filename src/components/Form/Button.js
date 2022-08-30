const Button = ({ submitting, label }) => {
    return (
        <button type="submit" disabled={submitting}>
            {label}
        </button>
    )
}

export default Button;
