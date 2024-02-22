import React, { useState } from 'react';
import './model3.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Carmo1 from './photo/modelCAR1.webp';
import Carmo2 from './photo/modelCAR2.webp';
import Carmo3 from './photo/modelCAR3.webp';
import Carmo4 from './photo/modelCAR4.webp';
import Carmo5 from './photo/modelCAR5.webp';
import Carmo6 from './photo/modelCAR6.webp';
import CardGroup from 'react-bootstrap/CardGroup';

function WithHeaderStyledExample() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='pag'>
            
             <h1 className='cakh'>Car.KA</h1>
             <div className='vvv'>
        <Carousel id='r' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <CardGroup>
<Card  className='ccc'>
  <Card.Img className='carmo2' variant="top" src={Carmo1} />
  <Card.Body>
    <Card.Title>The new 311 KA3 B rennsport</Card.Title>
    <Card.Text>
 
    </Card.Text>
  </Card.Body>
</Card>
<Card className='ccc'>
  <Card.Img className='carmo2'  variant="top" src={Carmo2} />
  <Card.Body>
    <Card.Title>KA2 RS Clubsport Evo Kit</Card.Title>
  </Card.Body>
 
</Card>
<Card className='ccc'>
  <Card.Img  className='carmo2' variant="top" src={Carmo3} />
  <Card.Body>
    <Card.Title>KA5 BS Clubsport Evo Kit</Card.Title>
  </Card.Body>
 
</Card>
</CardGroup>
        
</Carousel.Item>
            
            {/* ######################################################## */}
            <Carousel.Item>
            <CardGroup>
<Card  className='ccc'>
  <Card.Img className='carmo2' variant="top" src={Carmo4} />
  <Card.Body>
    <Card.Title>Season 2 for Maserati in Formula</Card.Title>
    <Card.Text>
 
    </Card.Text>
  </Card.Body>
</Card>
<Card className='ccc'>
  <Card.Img className='carmo2'  variant="top" src={Carmo5} />
  <Card.Body>
    <Card.Title>KA4 VB-Performance</Card.Title>
  </Card.Body>
 
</Card>
<Card className='ccc'>
  <Card.Img  className='carmo2' variant="top" src={Carmo6} />
  <Card.Body>
    <Card.Title>KAGT4 OD-Performance</Card.Title>
  </Card.Body>
 
</Card>

</CardGroup>
</Carousel.Item>
        </Carousel>
        </div>
        </div>
    );
}

export default WithHeaderStyledExample;
