
import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export function AuthProvider(props) {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        if (email === 'abc.com') {
            setAuth({
                token,
                email
            });
        }
    }, []);
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {props.children}
    </AuthContext.Provider>
);
}