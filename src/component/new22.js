import './new22.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import car1 from './photo/new.jpeg';
import car2 from './photo/new2.webp';
import car3 from './photo/new3.webp';


function Page2(){
    return(
        <div class="page22">
          <div className='script'></div>
           
<CardGroup >
<Card className='cardd'>
  <Card.Img variant="top" src={car1} />
  <Card.Body>
    <Card.Title>The retro-futuristic unique car</Card.Title>
    <Card.Text>
    The Car.KA S1 e-tron quattro Hoonitron¹ is more than just a vehicle for US drift artist Ken Block.
    </Card.Text>
  </Card.Body>
</Card>
<Card className='cardd'>
  <Card.Img  variant="top" src={car2} />
  <Card.Body>
    <Card.Title>
I immediately thought to myself: this is my ideal project</Card.Title>
    <Card.Text>
    Strong in design, comfort, and technology:
The revised Car.KA17
    </Card.Text>
  </Card.Body>
 
</Card>
<Card className='cardd'>
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