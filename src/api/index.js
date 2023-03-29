import axios from 'axios';

const instance = axios.create({
  // baseUrl: process.env.VUE_APP_API_URL,
  baseURL: "http://localhost:3000/",
});

function registerUser(userData) {
  return instance.post("signup", userData)
}

function loginUser(userData) {
  return instance.post("login", userData)
}

export { registerUser, loginUser };