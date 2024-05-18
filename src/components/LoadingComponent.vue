<template>
    <div class="loading-container">
      <img src="@/assets/loading.gif" alt="Loading" class="loading-image" />
    </div>
</template>
  
<script>
  export default {
    name: 'LoadingComponent'
  }
</script>
  
<style>
  .loading-container {
    width: 800px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loading-image {
    width: 100px;
    height: 100px;
  }
</style>
  