const firebase = require('firebase');
const firebaseui = require('firebaseui');


// initializing app with firebase

var firebaseConfig = {
    apiKey: "AIzaSyBz6Bol0rPrG-wyJ0MJFFdc7FUoAIgt55I",
    authDomain: "mech-3223c.firebaseapp.com",
    databaseURL: "https://mech-3223c.firebaseio.com",
    projectId: "mech-3223c",
    storageBucket: "mech-3223c.appspot.com",
    messagingSenderId: "993844135178",
    appId: "1:993844135178:web:41f005098762ccb5a366f3",
    measurementId: "G-0RF7LZM065"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'auth/callback',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    ],
    // Terms of service url.
    tosUrl: '/terms-of-service',
    // Privacy policy url.
    privacyPolicyUrl: '/privacy-policy'
  };
  

  function wrappedStart() {
    ui.start('#firebaseui-auth-container', uiConfig);
  }


  const storage = firebase.storage();
  const storageRef = storage.ref();
  const documentsRef = storageRef.child('documents');
  
  export {
    documentsRef
  }
  

  export default wrappedStart;
