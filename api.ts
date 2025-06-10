import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.6:3001', 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;