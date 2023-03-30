<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="text" v-model="password">
      </div>
      <button type="submit" :disabled="!isUsernameValid || !password">로그인</button>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { loginUser } from '@/api/index'
import { validateEmail } from '@/utils/validation'

export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: ""
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username)
    }
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        }
        const { data } =  await loginUser(userData);
        console.log(data);
        this.$router.push('/main');
        this.$store.commit('setUsername', data.user.username)
        this.$store.commit('setToken', data.token);
      } catch(error) {
        console.log(error);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style>

</style>