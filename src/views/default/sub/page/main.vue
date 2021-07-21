<template>
  <div>
    <div class="main-header">
      <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
        <path class="st0" d="M273.94,349.98L273.94,349.98v47.23l189.6-145.82L275.08,106.45c-0.27-0.29-0.54-0.59-0.81-0.88
          c-0.02,0.07-0.04,0.14-0.06,0.21l-0.28-0.21v1.16c-22.13,76.21-44.25,152.42-66.38,228.63L98.37,251.39l128.19-98.59v0v-47.23
          L36.96,251.39l159.39,122.58l0,0c9.85,7.75,19.71,15.49,29.56,23.24c0.04-0.14,0.08-0.27,0.12-0.41l0.53,0.41v-2.25
          c22.04-75.91,44.08-151.83,66.12-227.74l109.45,84.17L273.94,349.98z"/>
        <polygon class="st1" points="351.28,269.78 215.66,194.56 205.44,188.89 208.66,200.12 237.92,302.25 251.37,349.21 284.88,288.8 
          "/>
        <polygon class="st2" points="351.28,269.78 215.66,194.56 205.44,188.89 284.88,288.8 "/>
      </svg>
    </div>
    <div class="content main-title">
      <h1 class="has-text-centered has-text-grey-lighter">쉽고 즐거운 IT세상,<br/>IT를 주문하다 '오더릿'</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTitleHidden: true,
    }
  },
  mounted: function() {
    this.isTitleHidden = false;
  },
}
</script>

<style lang="scss" scope>
@import '~@/assets/scss/mixins/responsive';

svg {
  width: 100%;
  height: 300px;

  .st0{fill:#FDD000;}
  .st1{fill:#007FC7;}
  .st2{fill:#D4E5EB;}
}

.main-header {
  margin-top: 50px;
}

.main-title { 
  @include respond-below(small) {
    padding: 0 40px 0 40px;
  }

  h1 {
    line-height: 60px !important;
  }
}
</style>
