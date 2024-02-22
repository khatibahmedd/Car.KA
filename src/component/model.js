import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Car1 from './photo/carM1.webp'; 
import Car2 from './photo/carM2.webp';
import Car3 from './photo/carM3.webp';
import './model.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate()

  return (
    <div className='model'>
      <Carousel id='r' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >

        <h3 className='h3' >Car.KA C330</h3>
       
          <img id='car1' src={Car2} alt="First slide" />
          <Carousel.Caption className='part2'>
            <table className='tablekh'>
                <tr>
                    <th id='qqkh'>Max power</th>
                    <th id='qqkh'>Max speed</th>
                    <th id='qqkh'>Max torque</th>
                    <th id='qqkh'>Acceleration</th>
                </tr>
                <tr>
                    <td id='qqkhh'>490 HP</td>
                    <td id='qqkhh'>302 km/h</td>
                    <td id='qqkhh'>600 Nm</td>
                    <td id='qqkhh'>3.9 sec</td>
                </tr>
            
            </table>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

<h3 className='h3' >Car.PP N260</h3>

  <img id='car1' src={Car1} alt="First slide" />
  <Carousel.Caption className='part2'>
    <table className='tablekh'>
        <tr>
            <th id='qqkh'>Max power</th>
            <th id='qqkh'>Max speed</th>
            <th id='qqkh'>Max torque</th>
            <th id='qqkh'>Acceleration</th>
        </tr>
        <tr>
            <td id='qqkhh'>490 HP</td>
            <td id='qqkhh'>302 km/h</td>
            <td id='qqkhh'>600 Nm</td>
            <td id='qqkhh'>3.9 sec</td>
        </tr>
        
    </table>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>

<h3 className='h3' >Car.R KA330</h3>

  <img id='car1' src={Car3} alt="First slide" />
  <Carousel.Caption className='part2'>
    <table className='tablekh'>
        <tr>
            <th id='qqkh'>Max power</th>
            <th id='qqkh'>Max speed</th>
            <th id='qqkh'>Max torque</th>
            <th id='qqkh'>Acceleration</th>
        </tr>
        <tr>
            <td id='qqkhh'>490 HP</td>
            <td id='qqkhh'>302 km/h</td>
            <td id='qqkhh'>600 Nm</td>
            <td id='qqkhh'>3.9 sec</td>
        </tr>
     
    </table>
  </Carousel.Caption>
</Carousel.Item>
       

      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
