<template>
  <div>
    <header>
      <div>
        <p>연습</p>
        <router-link to="/" class="logo">
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
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$router.push("/login")
    }
  }
}
</script>

<style scopd>
  header {display: flex; align-items: center; justify-content: space-between; height: 40px; padding: 0 20px; color: #fff; background: #927dfc;}
  header a {color: #fff; text-decoration: none;}
</style>