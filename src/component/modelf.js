import React from 'react';
import './modelf.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CARF1 from './photo/a (1).webp';
import CARF2 from './photo/a (7).webp';
import CARF3 from './photo/a (3).webp';
import CARF4 from './photo/a (4).webp';
import CARF5 from './photo/a (5).webp';
import CARF6 from './photo/a (6).webp';

function ProductsSection() {
  const navigates = useNavigate()
  return (
    <div className='ProductsSection'>
      <h1 className='start' >Our models</h1>
      <div className='products'>
          
        <div className='contact'>
          <a href='/contact-us'>
            <img src={CARF1} alt='Product Image' />
          </a>
          <div className='title'>CARF220.KA</div>
        </div>
       
        <div className='contact'>
          <a href='/contact-us'>
            <img className='imm1' src={CARF6} alt='Product Image' />
          </a>
          <div className='title1'>CARF220.KA</div>
        </div>
         {/* ####################### */}
        <br></br>
 
        <div className='contact'>
          <a href='/contact-us'>
            <img className='imm3' src={CARF3} alt='Product Image' />
          </a>
          <div className='title'>CARF220.KA</div>
        </div>
      
        <Button id='btn4' variant="outline-dark" size="lg"  onClick={() => navigates("/allmodel")}>
      ALL MODEL
      </Button>{' '}

     
      </div>
     
    </div>
  );
}

export default ProductsSection;


