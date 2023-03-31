import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors'

function createInstace() {
  return axios.create({
    baseURL: "http://localhost:3000/",
  })
}

// 액시오스 초기화 함수
function createInstaceWithAuth(url) {
  const instance = axios.create({
    // baseUrl: process.env.VUE_APP_API_URL,
    baseURL: `http://localhost:3000/${url}`,
    // headers: {
    //   Authorization: store.state.token,
    // }
  });
  return setInterceptors(instance);
}

export const instance = createInstace();
export const posts = createInstaceWithAuth('posts');