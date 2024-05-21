<template>
  <div class="main-page">
    <div class="upper-section">
      <div class="left-part">
        <div class="customer-list-container">
          <CustomerList :customers="customers" @customer-selected="selectCustomer" />
        </div>
        <div class="dummy1-container">
          <component :is="dummy1Component" ref="aiProcess" />
        </div>
      </div>
      <div class="right-part">
        <div class="button-container">
          <img src="@/assets/button.png" alt="Button" class="button-image" @click="startProcess" />
        </div>
      </div>
    </div>
    <div class="lower-section">
      <div class="dummy2-container">
        <component 
          :is="dummy2Component" 
          :customer-name="selectedCustomer ? selectedCustomer.name : ''" 
          :products="products" 
          :apiResponse="apiResponse" 
          @proceed="handleProceed" 
          @cancel="resetProcess" 
          @back-to-step2="backToStep2" 
          @proceed-to-application="proceedToApplication"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomerList from './CustomerList.vue';
import Dummy1Component from './Dummy1Component.vue';
import Dummy2Component from './Dummy2Component.vue';
import AiProcess from './AiProcess.vue';
import LoadingComponent from './LoadingComponent.vue';
import LoadingComponent2 from './LoadingComponent2.vue';
import ProductRecommendations from './ProductRecommendations.vue';
import ProductDetails from './ProductDetails.vue';
// import axios from 'axios';

export default {
  name: 'MainPage',
  components: {
    CustomerList,
    Dummy1Component,
    Dummy2Component,
    AiProcess,
    LoadingComponent,
    LoadingComponent2,
    ProductRecommendations,
    ProductDetails
  },
  data() {
    return {
      customers: [
        { id: 36, name: '강민구', age: 36 },
        { id: 50, name: '김민구', age: 50 },
        { id: 68, name: '이민구', age: 68 },
        // 나머지 고객 정보
      ],
      selectedCustomer: null,
      dummy1Component: 'Dummy1Component',
      dummy2Component: 'Dummy2Component',
      products: [],
      selectedProduct: null,
      apiResponse: null
    };
  },
  methods: {
    selectCustomer(customer) {
      this.resetProcess();
      this.selectedCustomer = customer;
    },
    startProcess() {
      if (!this.selectedCustomer) {
        alert('고객을 선택해주세요.');
        return;
      }

      this.dummy1Component = 'AiProcess';
      this.dummy2Component = 'LoadingComponent';

      // API 호출 (주석 처리)
      // try {
      //   const response = await axios.post('/api/products', {
      //     customerId: this.selectedCustomer.id,
      //     customerName: this.selectedCustomer.name
      //   });

      //   this.products = response.data.products;
      //   this.dummy2Component = 'ProductRecommendations';
      // } catch (error) {
      //   console.error("Error fetching products:", error);
      // }

      // 5초 대기 후 더미 데이터로 대체
      setTimeout(() => {
        this.products = [
          { id: 1, plan: '종합형 기본플랜1', name: '실속건강보험', features: '세만기/12년만기/월납' },
          { id: 2, plan: '종합형 기본플랜2', name: '건강보험(연만기)', features: '연만기/기준형/월납' },
          { id: 3, plan: '종합형 기본플랜1', name: '운전자상해보험', features: '세만기/기준형/월납' },
          { id: 4, plan: '종합형 기본플랜1', name: '건강보험(연만기)(무배당)', features: '세만기/기준형/월납' },
          { id: 5, plan: '종합형 기본플랜2', name: '실속건강보험(무배당)', features: '세만기/12년만기/월납' },
          { id: 6, plan: '종합형 기본플랜3', name: '플러스 건강보험(연만기)(무배당)', features: '연만기/기준형/월납' }
        ];
        this.dummy2Component = 'ProductRecommendations';
      }, 5000);
    },
    async handleProceed(selectedProduct) {
      if (!selectedProduct) {
        alert('상품을 선택해주세요.');
        return;
      }

      this.selectedProduct = selectedProduct;
      this.$refs.aiProcess.setStep(2);
      this.dummy2Component = 'LoadingComponent2';

      // Simulate API call to fetch product details
      setTimeout(() => {
        // Dummy API response
        this.apiResponse = {
          customerName: this.selectedCustomer.name,
          productId: selectedProduct.id,
          productPlan: selectedProduct.plan,
          productName: selectedProduct.name,
          productFeatures: selectedProduct.features,
          category: '종합형/세만기',
          insuranceContents: '건강고지형(10년)/12년(A)/납면만기형(만기시 40세 가입)/20년납/100세만기/기본플랜',
          newSubscription: '없음',
          insuranceFee: '146,760 원',
          productDetails: [
            { coverageId: 1, coverageName: '일반상해사망', subscriptionAmount: 100, paymentPeriod: '20년', maturity: '20년', insuranceFee: 123456789 },
            { coverageId: 2, coverageName: '진단비', subscriptionAmount: 1000, paymentPeriod: '5년', maturity: '100세', insuranceFee: 654321 }
          ]
        };

        this.$refs.aiProcess.setStep(3);
        this.dummy2Component = 'ProductDetails';
      }, 3000);
    },
    resetProcess() {
      this.dummy1Component = 'Dummy1Component';
      this.dummy2Component = 'Dummy2Component';
      this.products = [];
      this.selectedProduct = null;
      this.apiResponse = null;
    },
    backToStep2() {
      this.dummy2Component = 'ProductRecommendations';
      this.$refs.aiProcess.setStep(2);
    },
    proceedToApplication() {
      if (!this.selectedProduct) {
        alert('상품을 선택해주세요.');
        return;
      }

      this.$router.push({
        name: 'ApplicationMain',
        params: {
          apiResponse: this.apiResponse,
          selectedCustomer: this.selectedCustomer,
          selectedProduct: this.selectedProduct
        }
      });
    }
  }
}
</script>

<style>
.main-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.upper-section {
  display: flex;
  width: 100%;
  height: 60%;
  margin-bottom: 20px;
}

.left-part {
  display: flex;
  flex-direction: column;
  width: 78%;
  margin-right: 2%;
}

.customer-list-container {
  flex: 1;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}

.dummy1-container {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-part {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-image {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.lower-section {
  width: 100%;
  height: 40%;
  background-color: #ffffff;
}

.dummy2-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.component-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
