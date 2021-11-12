import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


function Login() {
    axios.get('http://localhost:1337/connect/auth0').then(response => {
  console.log(response);
});
    const { loginWithRedirect } = useAuth0();
    return (
        <button onClick={()=> loginWithRedirect()}>
            Login
           
        </button>
    )
}

export default Login



