import { client } from '@/api/client';
import { getAuthorizationHeader, setToken } from '@/api/utils';
import { useUserStore } from '@/hooks/userStore';

export const register = async body => {
  const { data } = await client.post('/users/register', body);
  if (data.status === 'success') {
    setToken(data.data);
    await getMe();
    return;
  }
  return data.data;
};

export const login = async body => {
  const { data } = await client.post('/users/login', body);
  if (data.status === 'success') {
    setToken(data.data);
    await getMe();
    return;
  }
  return data.data;
};

export const getMe = async () => {
  const { data } = await client.get('/users/me', getAuthorizationHeader());
  if (data.status === 'success') {
    if (!useUserStore.getState().use) {
      await useUserStore.getState().setUser(data.data);
    }
  } else {
    await useUserStore.getState().setUser(null);
  }
};

export const updateUser = async body => {
  const { data } = await client.post(
    '/users/update',
    body,
    getAuthorizationHeader(),
  );
  if (data.status === 'success') {
    setToken(data.data);
    await getMe();
    return;
  }
  return data.data;
};
