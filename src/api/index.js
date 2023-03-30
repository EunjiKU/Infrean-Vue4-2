import axios from 'axios';
// import store from '@/store/index'
import { setInterceptors } from '@/api/common/interceptors'

function createInstace() {
  const instance = axios.create({
    // baseUrl: process.env.VUE_APP_API_URL,
    baseURL: "http://localhost:3000/",
    // headers: {
    //   Authorization: store.state.token,
    // }
  });
  return setInterceptors(instance);
}
const instance = createInstace();

function registerUser(userData) {
  return instance.post("signup", userData)
}

function loginUser(userData) {
  return instance.post("login", userData)
}

function fetchPosts() {
  return instance.get("posts")
}

// function fetchPosts() {
//   return instance.get("posts")
// }

export { registerUser, loginUser, fetchPosts };