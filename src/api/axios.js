import axios from 'axios';

console.log(import.meta.env.VITE_APP_BASE_URL);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use((req) => {
//   console.log('요쳥', req);
//   return req;
// });

// axiosInstance.interceptors.response.use(
//   (res) => {
//     console.log('응답', res);
//     return res;
//   },
//   (err) => {
//     console.log(err);
//   },
// );
export default axiosInstance;
