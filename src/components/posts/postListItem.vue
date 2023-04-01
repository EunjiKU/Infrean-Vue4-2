<template>
  <li class="item">
    <p class="item_tit">{{ postItem.title }}</p>
    <p class="item_cont">{{ postItem.contents }}</p>
    <p class="item_date">
      <span>{{ postItem.createdAt | formatDate }}</span>
      <span class="modi_btn" @click="routerEditPage">📝</span>
      <span class="del_btn" @click="deleteItem">❌</span>
    </p>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts'

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    }
  },
  // filters: {
  //   formatData(value) {
  //     return new Date(value);
  //   }
  // },
  methods: {
    async deleteItem() {
      if(confirm('You want to delete it?')) {
        await deletePost(this.postItem._id)
        this.$emit('refresh');
      }
    },
    async routerEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`)
    }
  },
}
</script>

<style>
.item_date span ~ span {margin-left: 10px;}
.item_date .modi_btn, .item_date .del_btn {cursor: pointer;}
</style>