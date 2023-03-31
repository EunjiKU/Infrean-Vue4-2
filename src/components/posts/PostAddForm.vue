<template>
  <div>
    <h1>Create Post</h1>
    <div class="create_form">
      <form v-on:submit.prevent="submitForm">
        <div>
          <label for="title">Title :</label>
          <input id="title" type="text" v-model="title">
        </div>
        <div>
          <label for="contents">Contents :</label>
          <textarea id="contents" rows="5" v-model="contents"></textarea>
          <p class="error" v-if="!isContentValid">Contents length must be less than 10</p>
        </div>
        <button type="submit" :disabled="!isContentValid">Create</button>
      </form>
      <p class="error">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/index'

export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: ""
    }
  },
  computed: {
    isContentValid() {
      return this.contents.length <= 10;
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents
        })
        this.$router.push('/main')
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    }
  }
}
</script>

<style>
  .create_form {margin-top: 20px; padding: 20px; background-color: #fff;}
  .create_form form {text-align: left;}
  .create_form form div {display: flex; flex-direction: column; margin-bottom: 14px;}
  .create_form form div label {text-align: left;}
  .create_form form button {padding: 10px; color: #fff; border: none; border-radius: 4px; background-color: #fe9616; cursor: pointer;}
  .create_form form button:disabled {background-color: #999; cursor: default;}
  .create_form .error {margin-top: 10px; color: red;}
</style>