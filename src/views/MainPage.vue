<template>
  <div>
    <h1>Today I Learned</h1>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <ul class="item_list" v-else>
      <postListItem
        v-for="postItem in postItems"
        v-bind:key="postItem._id"
        :postItem="postItem">
      </postListItem>
      <!-- <li class="item" v-for="postItem in postItems" v-bind:key="postItem._id">
        <p class="item_tit">{{ postItem.title }}</p>
        <p class="item_cont">{{ postItem.contents }}</p>
        <p class="item_date">{{ postItem.createdAt }}</p>
      </li> -->
    </ul>
    <router-link to="/add" class="create_btn">
      <span>+</span>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index'
import  postListItem from '@/components/posts/postListItem.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    }
  },
  components: {
    postListItem,
    LoadingSpinner
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
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
  .item_list .item {position: relative; flex: 1 1 auto; min-width: calc(50% - 10px); min-height: 200px; padding: 20px; background: #fff;}
  .item_list .item:nth-child(2n) {margin-left: 20px;}
  .item_list .item .item_tit {margin-bottom: 10px; font-size: 20px; font-weight: 600;}
  .item_list .item .item_cont {text-align: left;}
  .item_list .item .item_date {position: absolute; bottom: 20px; right: 20px; font-size: 12px; color: #666;}
  .create_btn {position: absolute; bottom: 30px; right: 30px; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; text-decoration: none; border-radius: 50%; border: 2px solid #fff; background: #fe9616;}
  .create_btn span {margin-bottom: 8px; font-size: 30px; color: #fff;}
</style>