import axios from 'axios';

export async function register(userData) {
  try {
    const response = await axios.post('/api/auth/user/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    
    return response
  } catch (error) {
    console.error('Error:', error);
  }
}
