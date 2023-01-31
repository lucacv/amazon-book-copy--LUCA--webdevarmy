// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// title section component
const SectionTitle = () => {

    return (
        <Container className='background-shape' fluid>
            <Row>
                <Col className='text-center mt-4 mb-4'>
                <h1 className='text-white'>Amazon Best Sellers</h1>
                <h6 className='text-white'>Our most popular products based on sales. Updated frequently.</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionTitle;