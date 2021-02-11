import axios from 'axios';
import URLS from '../config/urls';

export const login = (data) => {
  const url = URLS.login;
  return axios.post(url, data)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    return { status: false, msg: "Some error occured."+url }
  })
}
export const signup = (data) => {
  const url = URLS.signup;
  return axios.post(url, data)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    return { status: false, msg: "Some error occured." }
  })
}