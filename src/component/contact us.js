import "./contact us.css"
import Image from './photo/conct us.webp'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFile } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import React ,{useContext , useState} from 'react';
import {AuthContext} from "./AuthContext";


function BasicExample() {
    const navigates = useNavigate()
    const [email , setEmail] = useState('');

    
    function login(e){
        e.preventDefault();
        if(email === 'abc.com'){
            const token ='ok';
            localStorage.setItem('token', token);

        }else{
            alert('wrong information');
        }
    }
  return (
    <div className='con'>
 <img id='KHh' src={Image} ></img> 
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <h1 className='h2'>Car.KA</h1>
        <h1 className='w'>Welcome</h1>
        <Form.Control  id='email' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
       
      </Form.Group>

      <Button id='btn2' variant="primary" size="lg" active onClick={login} >
        COUNTINE
      </Button>{' '}
      <div className='coo'>
        <hr id='hr1' />
        <p className='ppp'>LOGIN WITHOUT PASSWORD</p>
        <hr id='hr2' />
    </div>
    <Button id='btn3' variant="outline-dark" size="lg" active  onClick={() => navigates("/conemail")}>
       <FaFile /> Countine With email
      </Button>{' '}
      <p className='pppp'>No account yet? Contact your Authorized Porsche <br />
       Dealer to register.</p>
    
    </Form>
   
    
    </div>
   
  );
}

export default BasicExample;