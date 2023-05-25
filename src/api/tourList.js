import axios from 'axios';

export async function getTourList() {
  try {
    const response = await axios.get('/tourList');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
