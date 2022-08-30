import Col from 'react-bootstrap/Col';

const FieldLayoutCol = ({ children, props }) => {
    return (
        <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg}>
            {children}
        </Col>
    )
}

export default FieldLayoutCol;
