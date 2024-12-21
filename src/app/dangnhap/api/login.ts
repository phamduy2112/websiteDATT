import axios from 'axios';

export async function login(userData) {
  try {
    const response = await axios.post('/api/login', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
  }
}
