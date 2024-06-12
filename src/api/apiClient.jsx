import axios from 'axios';
export const apiClient = axios.create({
  baseURL: "https://dlsqja3436.codns.com",
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
  },
});