import axios from 'axios';

const { MODE } = import.meta.env;

const baseURL = MODE === 'dev' ? '/proxy' : '';

const server = axios.create({
  baseURL,
});

export const getApiList = () => server.get('/api/list').then((res) => res.data);
