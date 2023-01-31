// import data from JSON file
import data from '../json-data/data-category-list-menu';

// importo React
import React, { useState } from 'react';

// import Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// secondary menu component
const CategoryListMenu = () => {
    
    const [categoryMenu, setBooks] = useState(data);

    return (
        <Navbar bg="light" variant="light" className='mt-0 mb-0' expand="md">
            <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
            <Navbar.Collapse className="category-list-container">
                <Nav className="me-auto">
                    {categoryMenu.map((categoryMenu)=>{
                        return (
                            <Nav.Link key={categoryMenu.id} href="#" className='category-list-a'>{categoryMenu.category}</Nav.Link>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CategoryListMenu;