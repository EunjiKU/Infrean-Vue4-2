import Vue from 'vue'
import Vuex from 'vuex'
import { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie } from '@/utils/cookie'
// import { loginUser } from '@/api/idex'
import { loginUser } from '@/api/auth'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getAuthFromCookie() || '',
    token: getUserFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== ''
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } =  await loginUser(userData);
      commit('setUsername', data.user.username)
      commit('setToken', data.token);
      saveAuthToCookie(data.user.username);
      saveUserToCookie(data.token);
      return data;
    }
  }
});