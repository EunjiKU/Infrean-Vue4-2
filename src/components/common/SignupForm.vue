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
      <div>
        <label for="nickname">nickname: </label>
        <input id="nickname" type="text" v-model="nickname">
      </div>
      <button type="submit">회원가입</button>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { registerUser } from '@/api/index'

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logMessage: ""
    }
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        }
        const { data } =  await registerUser(userData);
        console.log(data);
        this.logMessage = `${data.username}님이 가입되었습니다.`
      } catch (error) {
        console.log(error);
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    }
  }
}
</script>

<style>

</style>