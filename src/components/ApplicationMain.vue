<template>
  <div class="application-main">
    <!-- 파란색 줄 -->
    <div class="header-bar">
      <div class="input-group">
        <label for="subscription-number">청약 번호:</label>
        <input type="text" id="subscription-number" v-model="subscriptionNumber" />
      </div>
      <div class="input-group">
        <label for="product-id">상품 ID:</label>
        <input type="text" id="product-id" v-model="productId" />
      </div>
      <button class="query-button">조회</button>
    </div>
    <!-- 본문 -->
    <div class="content">
      <!-- 좌측 패널 -->
      <div class="left-panel">
        <div class="step-box">
          <h3>01 가입설계</h3>
          <p>고객 이름: {{ selectedCustomer.name }}</p>
          <p>상품 정보: {{ apiResponse.productName }}</p>
          <p>보험료: {{ apiResponse.insuranceFee }}</p>
        </div>
        <div class="inactive-step">02</div>
        <div class="inactive-step">03</div>
      </div>
      <!-- 우측 패널 -->
      <div class="right-panel">
        <table class="product-details-table">
          <thead>
            <tr>
              <th>체크</th>
              <th>담보명</th>
              <th>가입금액</th>
              <th>납기</th>
              <th>만기</th>
              <th>보험료</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="detail in apiResponse.productDetails" :key="detail.coverageId">
              <td><input type="checkbox" checked /></td>
              <td>{{ detail.coverageName }}</td>
              <td>{{ detail.subscriptionAmount }}</td>
              <td>{{ detail.paymentPeriod }}</td>
              <td>{{ detail.maturity }}</td>
              <td>{{ detail.insuranceFee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 저장 버튼 -->
    <div class="footer">
      <button class="save-button">저장</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'ApplicationMain',
  props: {
    apiResponse: Object,
    selectedCustomer: Object,
    selectedProduct: Object
  },
  data() {
    return {
      eligibility: null,
      discountRate: null,
      subscriptionNumber: '',
      productId: ''
    };
  },
  async created() {
    // API 호출
    const response = await this.fetchApplicationData(this.apiResponse.productId, this.selectedCustomer.id);
    this.eligibility = response.eligibility;
    this.discountRate = response.discountRate;
    console.log(this.selectedProduct);
  },
  methods: {
    async fetchApplicationData(productId, customerId) {
      console.log(productId);
      console.log(customerId);
      // API 호출 (주석 처리)
      // try {
      //   const response = await axios.post('/api/products', {
      //     productId: productId,
      //     customerId: customerId
      //   });

      //   this.eligibility = response.data.eligibility;
      //   this.discountRate = response.data.discountRate;
      //   this.subscriptionNumber = response.data.subscriptionNumber;
      //   this.productId = response.data.productId;

      // } catch (error) {
      //   console.error("Error fetching products:", error);
      // }

      // 0.5초 후 더미값 넣게 세팅
      setTimeout(() => {
        this.subscriptionNumber = 'ab123456789';
        this.productId = '12345';
      }, 500);
    }
  }
};
</script>

<style>
.application-main {
  font-family: Arial, sans-serif;
}

.header-bar {
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-bar .input-group {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.header-bar .input-group label {
  margin-right: 5px;
}

.header-bar .query-button {
  background-color: #ffc107;
  border: none;
  padding: 5px 10px;
  color: black;
  cursor: pointer;
  margin-left: auto; /* 조회 버튼을 우측 정렬 */
}

.content {
  display: flex;
  padding: 20px;
}

.left-panel {
  background-color: #ffc107;
  padding: 20px;
  margin-right: 20px;
  flex: 0 0 200px;
}

.step-box {
  border-radius: 0;
  padding: 10px;
  background-color: #ffd966;
  margin-bottom: 10px;
}

.step-box p {
  text-align: left;
}

.inactive-step {
  background-color: #e0e0e0;
  padding: 10px;
  margin-bottom: 10px;
  color: #888;
  text-align: center;
}

.right-panel {
  flex: 1;
}

.product-details-table {
  width: 100%;
  border-collapse: collapse;
}

.product-details-table th, .product-details-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.product-details-table th {
  background-color: #f2f2f2;
}

.footer {
  text-align: right;
  padding: 10px 20px;
  background-color: #f8f8f8;
}

.save-button {
  background-color: #ffc107;
  border: none;
  padding: 10px 20px;
  color: black;
  cursor: pointer;
}
</style>
