
import './page4.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function WithHeaderStyledExample() {
  const navigates = useNavigate()
  return (
    
    <Card className='allpa'>
      <Card.Header as="h2">THE ALL-NEW</Card.Header>
      <Card.Body id='page'>
       <p id='textK' >Experience a bold new take on the iconic CarKH. </p>
        <Button id='btnKH' variant="outline-light"  onClick={() => navigates("/new")} >Go Read More</Button>
      </Card.Body>
    </Card>
    
  );
}

export default WithHeaderStyledExample;