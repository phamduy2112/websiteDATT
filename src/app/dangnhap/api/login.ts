import axios from 'axios';

export async function login(userData) {
  try {
    const response = await axios.post('/login', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
  }
}
export async function Veritytoken(token:string) {
  try {
    const response = await axios.post('/validate-token', token, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
  }
}
