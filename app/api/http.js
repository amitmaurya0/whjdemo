import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config/urls';

const http = axios.create ({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});

http.interceptors.request.use (
  async function (config) {
    const token = await AsyncStorage.getItem('userToken');
    if (token) config.headers.Authorization = `${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default http;