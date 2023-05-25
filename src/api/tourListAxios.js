import axios from 'axios';
export async function getRawTourList() {
  try {
    const response = await axios.get(
      `http://15.165.135.183:8080/api/tour/filter?city=파리&order=별점순&minimumPrice=0&maximumPrice=100000000&tourType=all&page=1`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
