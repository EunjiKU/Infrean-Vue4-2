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

// 회원가입 API
function registerUser(userData) {
  return instance.post("signup", userData)
}

// 로그인 API
function loginUser(userData) {
  return instance.post("login", userData)
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get("posts")
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return instance.post('posts', postData)
}

// function fetchPosts() {
//   return instance.get("posts")
// }

export { registerUser, loginUser, fetchPosts, createPost };