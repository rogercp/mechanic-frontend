/**
 * Dependencies
 */


import React, { useEffect } from 'react';
import firebase from '../helpers/firebase'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
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

          <Container>
            <Row>
              
              <Col xs={12}>
                <div id='firebaseui-auth-container'></div>
                <div id='loader'></div>
              </Col>
            
            </Row>
          </Container>
        
        </>
       )
}

/**
 * Export component
 */

export default Login;
