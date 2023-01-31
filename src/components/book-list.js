// import data from JSON file
import data from '../json-data/data';

// importo React
import React, { useState } from 'react';

// import Bootstrap components
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// best seller section component
const BookList = () => {

    const [books, setBooks] = useState(data);

    return (
        <Container fluid>
            <Row>
                <Col className='mt-3 mb-3'>
                <h4>Best Sellers in Books</h4>
                </Col>
            </Row>
            <Row>
                {books.map((books)=>{
                    return (
                        <Col className="d-flex align-items-stretch g-0" key={books.id} md={6} sm={6} lg={4}>
                            <CardGroup>
                                <Card onClick={(()=>alert('Book Title: ' + books.title + ' - ' + 'Book Author: ' + books.author))} border="light" className='rounded-0 position-relative hover-effect'>
                                <div className="top-0 start-0 position-relative">
                                    <span className='p-1' style={{'color': '#ffffff', 'backgroundColor': '#c45500'}}>#{books.id}</span>
                                </div>
                                    <Card.Img variant="top" src={books.img}></Card.Img>
                                    <Card.Body>
                                        <Card.Title style={{'minHeight': '48px'}}>{books.title}</Card.Title>
                                        <Card.Subtitle>{books.author}</Card.Subtitle>
                                        <Card.Text>
                                            ${books.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )

}

export default BookList;