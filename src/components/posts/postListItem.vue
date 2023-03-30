<template>
  <li class="item">
    <p class="item_tit">{{ postItem.title }}</p>
    <p class="item_cont">{{ postItem.contents }}</p>
    <p class="item_date">{{ postItem.createdAt }}</p>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>