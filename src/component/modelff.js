import "./modelff.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Imagee from './photo/77.webp'





function Modelff() {
    const navigate = useNavigate()

  return (
    <div className='con2'>

 <img id='KHhh' src={Imagee} ></img> 
 <div className="textka">
  <h1 className="hw">Want to know more?</h1>
  <p className="pw">Get it in touch with a Maserati expert to know more about the new CAR.KA.</p>
  <Button id='' variant="outline-light"  size="lg"  onClick={()=>navigate("/contact-us")}>
              CONTACT US
        </Button>

  </div>
    
    </div>
   
  );
}

export default Modelff;