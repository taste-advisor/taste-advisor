import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1/';
export const client = axios.create({ baseURL });
