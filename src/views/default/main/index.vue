<template>
  <Navbar />
  <div class="main">
    <router-view />
  </div>
  <footer><Footer /></footer>
  <TopButton :default-bottom-position="32" :footer-height="52" />
</template>

<script>
import Navbar from '../include/navbar.vue';
import Footer from '../include/footer.vue';
import TopButton from '@/assets/components/top-button';

export default {
  components: {
    Navbar,
    Footer,
    TopButton,
  },
}
</script>

<style lang="scss" scope>
@import '~@/assets/scss/mixins/responsive';

html, body {
  height: 100%;
  background-color: #000;
}

.main {
  position: relative;
  min-height: 100%;
  box-sizing: border-box;  
  overflow-x: auto;

  @include respond-below(large) {
    margin-left: auto;
    overflow-x: unset;
  }

  @include respond-below(small) {
    padding-bottom: 110px;
  }
}

footer {
  position: fixed;
  bottom: 0;
  z-index: 20;
  width: 100%;
  // min-width: 964px;
  padding: 5px 32px;
  background-color: #1a1a1c;
  box-sizing: border-box;

  @include respond-below(small) {
    min-width: 320px;
    margin-top: -152px;
    padding: 20px 16px 23px;
  }
}
</style>
