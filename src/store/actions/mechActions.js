// import axios from 'axios';
// axios.defaults.withCredentials=true

// export const LOGIN_START = "LOGIN_START";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_ERROR = "LOGIN_ERROR";
// export const SIGNUP_START = "SIGNUP_START";
// export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
// export const SIGNUP_ERROR = "SIGNUP_ERROR";
// export const LOG_OUT ="LOG_OUT"



// export const signUp = creds => dispatch => {
//   dispatch({ type: SIGNUP_START });

//  console.log(creds)

//   return axios
//     .post("https://team-family-recipes.herokuapp.com/api/register", creds)
//     .then(res => {
//       console.log('rel')
//      localStorage.setItem("jwt", res.data.token);
//       dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token});
//     })
//     .catch(err => console.log("register",err));
  
// };

// //////////////////////////////////////////////////////