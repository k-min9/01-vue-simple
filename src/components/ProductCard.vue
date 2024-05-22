<template>
  <div
    class="product-card"
    :class="{ selected: isSelected }"
    @click="selectProduct"
  >
    <h3>{{ product.plan }}</h3>
    <p>{{ product.name }}</p>
    <p>{{ product.features }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
    isSelected: Boolean
  },
  methods: {
    selectProduct() {
      this.$emit('select');
    }
  }
};
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  width: 230px;
  cursor: pointer;
}

.product-card.selected {
  background-color: yellow;
}
</style>
