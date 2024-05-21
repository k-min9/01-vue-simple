<template>
  <div class="loading-container">
    <div class="loading-message"><b>{{ customerName }}</b>님의 스마트 청약을 진행중입니다.</div>
    <div><img src="@/assets/loading.gif" alt="Loading" class="loading-image" /></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    customerName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.loading-container {
  width: 800px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-message {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  text-align: left;
}

.loading-image {
  width: 100px;
  height: 100px;
}
</style>
