
import React from "react";
import firebase from "firebase";
import axios from "axios";


/**
 * Define 
 */

function AuthCallback(props) {
    firebase.auth().onAuthStateChanged(async user => {
        console.log("Authcallback")
        // User is signed in.
        if (user) {
            let token = await user.getIdToken();
            localStorage.setItem("token", token);

            axios
                .post(`${process.env.REACT_APP_API_URL}/users/auth`, {
                    user: user,
                    token: token
                })
                .then(res => {
                    console.log(res.data,  "data")
                    localStorage.setItem("id", res.data.id);
                    window.location = "/home";
                })
                .catch(err => {
                    console.error(err);
                    window.location = "/login";
                });
        } else {
            // User is signed out.
            window.location = "/login";
        }
    });

    return <div className="login" />;
}

/**
 * Export view
 */

export default AuthCallback;
