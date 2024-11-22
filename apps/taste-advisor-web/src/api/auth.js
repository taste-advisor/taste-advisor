import { client } from '@/api/client';
import { getAuthorizationHeader, setToken } from '@/api/utils';
import { useUserStore } from '@/hooks/userStore';

export const register = async body => {
  const { data } = await client.post('/users/register', body);
  if (data.status === 'success') {
    setToken(data.data);
    return;
  }
  return data.data;
};

export const login = async body => {
  const { data } = await client.post('/users/login', body);
  if (data.status === 'success') {
    setToken(data.data);
    return;
  }
  return data.data;
};

export const getMe = async () => {
  const { data } = await client.get('/users/me', getAuthorizationHeader());
  if (data.status === 'success') {
    await useUserStore.getState().setUser(data.data);
  } else {
    await useUserStore.getState().setUser(null);
  }
};
