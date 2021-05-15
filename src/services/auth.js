const authUrl = 'https://reqres.in/api';
export const login = async (credentials) => {
  try {

    const response = await fetch(`${authUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error('[login] error');
    console.trace(error);
  }
};

export const register = async (credentials) => {
  try {
    const response = await fetch(`${authUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error('[register] error');
    console.trace(error);
  }
};

export const logOut = async () => {
  localStorage.removeItem('auth.token');
};
