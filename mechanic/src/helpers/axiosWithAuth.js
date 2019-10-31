/**
 * Dependencies
 */

import axios from 'axios';

/**
 * Define helper
 */

const axioswithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: `${process.env.REACT_APP_API_URL}`
  });
}

/**
 * Export helper
 */

export default axioswithAuth;
