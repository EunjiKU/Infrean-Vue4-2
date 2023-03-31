<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<style>
  * {margin: 0; padding: 0; margin: 0; box-sizing: border-box; text-align: center;}
  ul, li {list-style: none;}
  body {background: #edecf3;}
  h1 {margin: 30px 0;}
  form div input {height: 40px;padding: 10px; text-align: left; border: 1px solid #ededed;}
  form div textarea {padding: 10px; text-align: left;border: 1px solid #ededed;}
</style>
