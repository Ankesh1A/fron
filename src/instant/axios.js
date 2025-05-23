import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ba-o7bb.onrender.com', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Cookies ko bhejne ke liye
});

export default axiosInstance;
