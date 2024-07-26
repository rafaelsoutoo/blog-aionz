import axios from 'axios';

const api = axios.create({
  baseURL: 'https://669fef04b132e2c136ff9d28.mockapi.io/api/v1',
});

export default api;
