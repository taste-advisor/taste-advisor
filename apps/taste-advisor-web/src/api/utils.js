export const setToken = token => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem('AUTH_TOKEN', token);
};

export const getToken = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const token = localStorage.getItem('AUTH_TOKEN');
  return token ? token : null;
};

export const getAuthorizationHeader = () => {
  const token = getToken();
  if (!token) return;
  return {
    headers: { Authorization: `${getToken()}` },
  };
};
