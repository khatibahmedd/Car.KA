import React from 'react';
import './allmodel.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CARF1 from './photo/a (1).webp';
import CARF2 from './photo/a (2).webp';
import CARF3 from './photo/a (3).webp';
import CARF4 from './photo/a (4).webp';
import CARF5 from './photo/a (5).webp';
import CARF6 from './photo/a (6).webp';
import CARF7 from './photo/a (7).webp';
import CARF8 from './photo/a (8).webp';

function ProductsSection() {
  return (
    <div className='ProductsSection2'>
        <div className='start1'>
        <h1 className='start2' >ALL MODEL</h1>

        </div>
     


    <Row xs={1} md={3} className="g-4">
     
        
          <Card className='dis' >
            <Card.Img className='ca' variant="top" src={CARF6} />
           
            <Card.Body>
              <Card.Title>CARKW200</Card.Title>
            
            </Card.Body>
          </Card>
          <Card className='dis' >
            <Card.Img className='ca' variant="top" src={CARF3} />
           
            <Card.Body>
              <Card.Title>CarCSS20</Card.Title>
            
            </Card.Body>
          </Card>
        
     
    </Row>
    {/* 2222222222222222222222222222222222222 */}
    <Row xs={1} md={3} className="g-4">
     
        
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF2} />
      
       <Card.Body>
         <Card.Title>CaR.KA200</Card.Title>
       
       </Card.Body>
     </Card>
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF7} />
      
       <Card.Body>
         <Card.Title>CaE300</Card.Title>
       
       </Card.Body>
     </Card>
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF2} />
      
       <Card.Body>
         <Card.Title>OOO569</Card.Title>
       
       </Card.Body>
     </Card>
   

</Row>
{/* 33333333333333333333333333333333333333333333333333 */}
<Row xs={1} md={3} className="g-4">
     
        
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF1} />
      
       <Card.Body>
         <Card.Title>CarPP200</Card.Title>
       
       </Card.Body>
     </Card>
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF1} />
      
       <Card.Body>
         <Card.Title>CarC360</Card.Title>
       
       </Card.Body>
     </Card>
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF1} />
      
       <Card.Body>
         <Card.Title>Ca500</Card.Title>
       
       </Card.Body>
     </Card>
   

</Row> 
{/* 555555555555555555555555555555555555555 */}
<Row xs={1} md={1} className="g-4">
     
        
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF5} />
      
       <Card.Body>
         <Card.Title>KHATIB1700</Card.Title>
       
       </Card.Body>
     </Card>
     
   

</Row>
{/* 66666666666666666666666666666666666666666666666 */}
<Row xs={1} md={3} className="g-4">
     
        
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF3} />
      
       <Card.Body>
         <Card.Title>BEBO.C200</Card.Title>
       
       </Card.Body>
     </Card>
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF6} />
      
       <Card.Body>
         <Card.Title>KA.17</Card.Title>
       
       </Card.Body>
     </Card>
     <Card className='dis' >
       <Card.Img className='ca' variant="top" src={CARF3} />
      
       <Card.Body>
         <Card.Title>CarJK89</Card.Title>
       
       </Card.Body>
     </Card>
   

</Row>




     
    </div>
  );
}

export default ProductsSection;