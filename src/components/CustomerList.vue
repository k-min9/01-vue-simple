<template>
    <div class="customer-list">
      <div 
        v-for="customer in customers" 
        :key="customer.id" 
        :class="['customer-item', { selected: customer.id === selectedCustomer?.id }]"
        @click="selectCustomer(customer)"
      >
        <img :src="require(`@/assets/customer/${customer.id}.png`)" :alt="customer.name" class="customer-image" />
        <p>{{ customer.name }}({{ customer.age }})</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerList',
    props: {
      customers: Array
    },
    data() {
      return {
        selectedCustomer: null
      };
    },
    methods: {
      selectCustomer(customer) {
        this.selectedCustomer = customer;
        this.$emit('customer-selected', customer);
      }
    }
  }
  </script>
  
  <style>
  .customer-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
  }
  
  .customer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 0 10px;
  }
  
  .customer-item.selected {
    background-color: yellow;
  }
  
  .customer-image {
    width: 50px;
    height: 50px;
  }
  </style>
  