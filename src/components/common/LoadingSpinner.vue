<template>
  <div class="spinner_container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .spinner_container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content:  center;
    align-items: center;
    pointer-events: none;
  }
  .spinner_container .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #e0e0e0;
    border-bottom: 5px solid #fe9616;
    animation: spin 1s linear infinite;
    position: relative;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>