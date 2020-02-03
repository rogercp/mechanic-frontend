
import axios from 'axios';


const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: `${process.env.REACT_APP_API_URL}`
  });
}


export default axiosWithAuth;
