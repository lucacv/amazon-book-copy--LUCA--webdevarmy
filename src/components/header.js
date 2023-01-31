// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

// import ReactJS icons
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// header & menu component
const Header = () => {

    return (
        <Navbar bg="dark" expand="md">
        <Container fluid>
            <Navbar.Brand href="#home">
            <img style={{'maxWidth' : '120px', 'with': '100%'}}
                className='img-fluid shadow-4 align-items-center' alt='Amazon Logo'
                src={"https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/2560px-Amazon-logo-white.svg.png"}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className='me-auto my-2 my-lg-0'>
                    <Button variant="link" style={{'color': 'white', 'textDecoration': 'none', 'whiteSpace': 'nowrap'}}>Deliver to</Button>
                    <Button variant="link" style={{'color': 'white', 'textDecoration': 'none', 'whiteSpace': 'nowrap'}}>Books</Button>
                </Nav>
                <Nav className='w-100'>
                    <Form className="d-flex w-100">
                        <Form.Control
                        type="search"
                        placeholder="Search Amazon"
                        className="me-2 w-100"
                        aria-label="Search"
                        ></Form.Control>
                        <Button style={{'backgroundColor': '#c45500', 'borderColor': '#c45500'}}><FaSearch></FaSearch></Button>
                    </Form>
                </Nav>
                <Nav>
                    <Button variant="link" style={{'color': 'white', 'textDecoration': 'none'}}>Account</Button>
                    <Button variant="link" style={{'color': 'white', 'textDecoration': 'none'}}>Orders</Button>
                    <Button variant="link" style={{'color': 'white', 'textDecoration': 'none', 'whiteSpace': 'nowrap'}}><FaShoppingCart style={{'fontSize': '2rem', 'marginRight': '5px'}}></FaShoppingCart> Cart</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;