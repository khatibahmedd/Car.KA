import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';


function BasiExample() {
    const { auth, setAuth } = useContext(AuthContext);

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        setAuth({});
    }
    return (
        <div>
        {auth.email ? (
            <div>
                {auth.email}{' '}
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            'you need login'
        )}
    </div>

);
}

export default BasiExample;