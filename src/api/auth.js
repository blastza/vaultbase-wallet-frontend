import axios from 'axios';

const API_URL = 'http://localhost:8091/api/auth'; // Your backend endpoint

export async function login(email, password) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
}

export async function register({ name, email, password }) {
  await axios.post(`${API_URL}/register`, { name, email, password });
}
