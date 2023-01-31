// importo React
import React, { useState, useEffect } from 'react';

// import data from JSON file
import data from '../json-data/data';

// import Bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

// import ReactJS icons
import { FaAngleDown } from "react-icons/fa";


// create custom Accordition component & function
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('works'),
    );
  
    return (
      <button
        className='m-0 p-0 mt-3'
        type="button"
        style={{ backgroundColor: 'transparent', 'border': 'none', 'textAlign': 'left', 'fontWeight': 'bold'}}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
}

const Sidebar = () => {

    const [books, setBooks] = useState(data);

    return (
        <Accordion defaultActiveKey="0">
        <Card style={{'border': 'none'}}>
          <Card.Header className='m-0 p-0' style={{'backgroundColor': 'transparent', 'border': 'none'}}>
            <CustomToggle eventKey="0">Boooks Categories <FaAngleDown></FaAngleDown></CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className='p-0 m-0'>
                {books.map((books)=>{
                    return (
                        <ListGroup key={books.id} variant="flush" className='no-border'>
                            <ListGroup.Item className='mt-2 p-0 m-0 mb-2'>{books.category}</ListGroup.Item>
                        </ListGroup>
                    )
                    })
                }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
};

export default Sidebar;