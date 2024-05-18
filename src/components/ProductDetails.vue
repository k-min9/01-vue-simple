<!-- src/components/ProductDetails.vue -->
<template>
    <div class="product-details-container">
      <h2>{{ apiResponse.customerName }}님의 하이패스 맞춤청약완료</h2>
      <p>{{ apiResponse.productName }}</p>
      <p>분류: {{ apiResponse.category }}</p>
      <p>보험내용: {{ apiResponse.insuranceContents }}</p>
      <p>신규담보가입: {{ apiResponse.newSubscription }}</p>
      <p>보험료: {{ apiResponse.insuranceFee }}</p>
      <div class="actions">
        <button @click="cancel">취소</button>
        <button @click="backToStep2">상품검색</button>
        <button @click="proceed">청약진행</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetails',
    props: {
      apiResponse: Object
    },
    methods: {
      cancel() {
        this.$emit('cancel');
      },
      backToStep2() {
        this.$emit('back-to-step2');
      },
      proceed() {
        this.$emit('proceed');
      }
    }
  };
  </script>
  
  <style>
  .product-details-container {
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }
  
  .actions button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  