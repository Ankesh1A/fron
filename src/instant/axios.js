import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://saadidukan-2.onrender.com', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Cookies ko bhejne ke liye
});

export default axiosInstance;
