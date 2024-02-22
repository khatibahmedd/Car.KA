import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './model1.css';
import Button from 'react-bootstrap/Button';

export default function Model() { 
    const navigate = useNavigate();

    return (
        <div className="model1">
            <div className='write'>
            <h1 className='hha' >Car.KA</h1>
            <p className='pra'>Not made for the road, not made for racing series regulations.
                 The new 311 KA3 B rennsport. Limited to just 88 units it is a celebration 
                 of the pure joy of racing for those who can truly appreciate the myth of the 811.
                  Built from legacy.</p>
                  </div>
        </div>
    );
}
