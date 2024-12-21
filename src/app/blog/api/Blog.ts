// /auth/post
import axios from 'axios';

export async function getBlogApi() {
  try {
    const response = await axios.get('/api/auth/post', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
return response.data  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
  }
}
// http://api-core.dsp.one/api/auth/post/4

export async function getBlogDetailApi(id:number) {
  try {
    const response = await axios.get(`/api/auth/post/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
return response.data  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
  }
}
