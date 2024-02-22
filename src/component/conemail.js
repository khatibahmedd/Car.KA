import React, { useState } from 'react';
import './conemail.css';
import Image from './photo/conct us.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const GeolocationComponent = () => {
  const [coordinates, setCoordinates] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      setCoordinates("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    setCoordinates({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };

  return (
    <div className='try'>
      
    <p> get your coordinates.</p>
      <button onClick={getLocation}>Try It</button>

      <p id="demo">
        {coordinates ? (
          <>
            Latitude: {coordinates.latitude} <br />
            Longitude: {coordinates.longitude}
          </>
        ) : (
          "Waiting for coordinates..."
        )}
      </p>
    </div>
  );
};

const BasicExample = () => {
  const [state, handleSubmit] = useForm("mgegknvy");

  if (state.succeeded) {
    return <p id='mass'>Thanks Done!</p>;
  }

  return (
    <div className='con'>
      <img id='KHh' src={Image} alt="Contact us" />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1 className='h2'>Car.KA</h1>
          <h1 className='w'>Welcome</h1>
          <Form.Control id='email' name="email" type="email" placeholder="Enter email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Form.Control id="message" name="message" as="textarea" placeholder="Enter massage ..." rows={3} />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </Form.Group>

        <Button id='btn22' type="submit" disabled={state.submitting} variant="primary" size="lg" active>
          SEND
        </Button>{' '}
        <br />
        <Link id='ll' to="/contact-us"> Back </Link>

        <p className='pppp'>No account yet? Contact your Authorized Porsche <br />
          Dealer to register.</p>
      </Form>
      <GeolocationComponent />
    </div>
  );
};

export default BasicExample;

