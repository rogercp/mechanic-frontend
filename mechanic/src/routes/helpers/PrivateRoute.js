/**
 * Dependencies
 */

import React from 'react';
import { Route } from 'react-router-dom';
import firebase from 'firebase';
import uuid from 'uuid';
import axios from 'axios';

/**
 * Define route component
 */
const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {

    firebase.auth().onAuthStateChanged(async (user)=>{

        if(user){
            
    
            let token = await user.getIdToken()

            localStorage.setItem('token',token)

            axios.post(`${process.env.REACT_APP_API_URL}/users/auth`,{
                user:user,
                token:token
            }).then(res =>{
                localStorage.setItem('id',res.data.id)
            }).catch(err =>{
                console.log(err)
            });

        }



    })

}
