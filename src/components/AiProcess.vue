<template>
  <div class="ai-process">
    <div :class="{'step-active': step === 1}" class="step" id="step-1">STEP 01 상품검색</div>
    <div :class="{'step-active': step === 2}" class="step" id="step-2">STEP 02 AI 가입설계</div>
    <div :class="{'step-active': step === 3}" class="step" id="step-3">STEP 03 맞춤청약</div>
  </div>
</template>

<script>
export default {
  name: 'AiProcess',
  data() {
    return {
      step: 1
    };
  },
  methods: {
    setStep(step) {
      this.step = step;
    }
  }
}
</script>

<style>
.ai-process {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
}

.step {
  padding: 10px;
  font-size: 18px;
  background-color: white;
}

.step-active {
  background-color: yellow;
}
</style>
