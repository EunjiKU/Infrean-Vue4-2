<template>
  <div>
    <h1>Today I Learned</h1>
    <ul class="item_list">
      <li class="item" v-for="postItem in postItems" v-bind:key="postItem._id">
        <p class="item_tit">{{ postItem.title }}</p>
        <p class="item_cont">{{ postItem.contents }}</p>
        <p class="item_date">{{ postItem.createdAt }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index'

export default {
  data() {
    return {
      postItems: [],
    }
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      console.log(data);
      this.postItems = data.posts;
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped>
  .item_list {margin: 20px; display: flex;}
  .item_list .item {position: relative; flex: 1 1 auto; min-width: 50%; min-height: 200px; padding: 20px; background: #fff;}
  .item_list .item:nth-child(2n) {margin-left: 20px;}
  .item_list .item .item_tit {margin-bottom: 10px; font-size: 20px; font-weight: 600;}
  .item_list .item .item_cont {text-align: left;}
  .item_list .item .item_date {position: absolute; bottom: 20px; right: 20px; font-size: 12px; color: #666;}
</style>