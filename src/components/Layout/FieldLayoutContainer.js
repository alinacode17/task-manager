import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function FieldLayoutContainer({ children }) {
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export default FieldLayoutContainer;