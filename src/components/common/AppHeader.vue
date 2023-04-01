<template>
  <div>
    <header>
      <div>
        <router-link :to="logoLink" class="logo">
          TIL
        </router-link>
      </div>
      <div class="navigations">
        <template v-if="isUserLogin">
          <span>😎{{ $store.state.username }} </span>
          <a href="javascript:" v-on:click="logoutUser">🔓로그아웃</a>
        </template>
        <template v-else>
          <router-link to="/login">🔒로그인 </router-link>
          <router-link to="/signup">🔑회원가입</router-link>
        </template>
      </div>
    </header>
  </div>
</template>

<script>
import { deleteCookie } from '@/utils/cookie'

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login'
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push("/login")
    }
  }
}
</script>

<style scopd>
  header {display: flex; align-items: center; justify-content: space-between; height: 40px; padding: 0 20px; color: #fff; background: #927dfc;}
  header a {color: #fff; text-decoration: none;}
</style>