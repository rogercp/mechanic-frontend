/**
 * Dependencies
 */


import React, { useEffect } from 'react';
import firebase from '../helpers/firebase'

/**
 * Import styles
 */



/**
 * Define component
 */

function Login(props) {

    useEffect(() => {
        firebase();
      }, []);

    return (

        <>
        <h1>Login</h1>
        <div id='firebaseui-auth-container'></div>
        <div id='loader'></div>
        </>
       )
}

/**
 * Export component
 */

export default Login;
