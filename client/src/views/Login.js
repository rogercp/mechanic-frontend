


import React, { useEffect } from 'react';
import firebase from '../helpers/firebase'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card"





function Login(props) {

    useEffect(() => {
        firebase();
      }, []);

    return (

        <>

          <Container>
            <Row>
              <Card style={{  backgroundColor:"rgb(212, 212, 211)",height:"100vh",paddingTop: "50px",}}>
                <div id='firebaseui-auth-container'></div>
                <div id='loader'></div>
              </Card>
            
            </Row>
          </Container>
        
        </>
       )
}



export default Login;
