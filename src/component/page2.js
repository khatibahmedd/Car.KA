import './page2.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import car1 from './photo/car1.jpeg';
import car2 from './photo/car2.jpeg';
import car3 from './photo/car3.jpeg';


function Page2(){
    return(
        <div class="page2">
          <div className='script'></div>
           <p id='pp' >Press releases </p>
<CardGroup>
<Card>
  <Card.Img variant="top" src={car1} />
  <Card.Body>
    <Card.Title>Car.KA</Card.Title>
    <Card.Text>
    Audi Tradition at many international events in 2024.
    Experience history through vehicles from Audi’s
     historical collection, lectures at the Audi museum mobile, and events around the world
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Img  variant="top" src={car2} />
  <Card.Body>
    <Card.Title>Car.KA</Card.Title>
    <Card.Text>
    Strong in design, comfort, and technology:
The revised Audi Q7
    </Card.Text>
  </Card.Body>
 
</Card>
<Card>
  <Card.Img variant="top" src={car3} />
  <Card.Body>
    <Card.Title>Car.KA</Card.Title>
    <Card.Text>
    Historic victory for Audi at the Dakar Rally.
    Audi RS Q e-tron wins toughest desert rally with innovative drive syste.
    Carlos Sainz/Lucas Cruz achieve fourth personal victory.

    </Card.Text>
  </Card.Body>
 
</Card>
</CardGroup>



        </div>

   );
}

export default Page2;

