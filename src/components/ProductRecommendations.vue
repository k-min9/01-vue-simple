<template>
  <div class="product-recommendations-container">
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :isSelected="product.id === selectedProductId"
        @select="selectProduct(product.id)"
      />
    </div>
    <div class="actions">
      <button @click="cancel">취소</button>
      <button @click="proceed">설계진행</button>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductRecommendations',
  components: {
    ProductCard
  },
  props: {
    products: Array
  },
  data() {
    return {
      selectedProductId: null
    };
  },
  methods: {
    selectProduct(productId) {
      this.selectedProductId = productId;
    },
    cancel() {
      this.$emit('cancel');
    },
    proceed() {
      if (this.selectedProductId === null) {
        alert('상품을 선택해주세요.');
        return;
      }

      const selectedProduct = this.products.find(
        product => product.id === this.selectedProductId
      );

      this.$emit('proceed', selectedProduct);
    }
  }
};
</script>

<style>
.product-recommendations-container {
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
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
