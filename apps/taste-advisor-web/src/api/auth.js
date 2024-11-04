import { client } from '@/api/client';
import { getAuthorizationHeader, setToken } from '@/api/utils';

export const register = async body => {
  const { data } = await client.post('/users/register', body);
  if (data.status === 'success') {
    setToken(data.data);
  }
};

export const login = async body => {
  const { data } = await client.post('/users/login', body);
  if (data.status === 'success') {
    setToken(data.data);
  }
};

export const getMe = async () => {
  const { data } = await client.get('/users/me', getAuthorizationHeader());
  if (data.status === 'success') return data.data;
};
