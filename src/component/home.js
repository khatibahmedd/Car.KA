import { useNavigate } from 'react-router-dom';
import './home.css'
import Button from 'react-bootstrap/Button';



function Home(){
   const navigate = useNavigate()
   return(
<div class="home">
   <p className='pl1'>Major steps toward an electric future</p>
   <p className='pl2'>Who are the faces behind the new Car.KA</p>
   <Button id='btn' variant="outline-light"  size="lg"  onClick={()=>navigate("/model")}>
            Car.KA  
        </Button>

</div>


   )
}
export default Home;
