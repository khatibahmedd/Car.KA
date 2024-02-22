

import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './photo/asset 54.gif'

function BasicExample() {

  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid id='nav'>
        <Navbar.Brand href="/"><img className='logo' src={logo}></img> <h1 className='logon'>Car.KA</h1> </Navbar.Brand>
        <Navbar.Toggle id='t' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='navbar' className="me-auto">
            <Nav.Link   href="/" > <h1  className='n'>HOME</h1> </Nav.Link>
            <Nav.Link href="/model"> <h1 className='n' >MODELS</h1> </Nav.Link>
            <Nav.Link href="/new"> <h1 className='n'>NEWS</h1> </Nav.Link>
            <Nav.Link href="/contact-us"> <h1 className='n' >CONTACT US</h1></Nav.Link>
            <hr />
      
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  
   
    
  );
}

export default BasicExample;


