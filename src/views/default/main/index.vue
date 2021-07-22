<template>
  <div class="layout">
    <div class="layout-header">
      <Navbar class="layout-header"/>
    </div>
    <div class="layout-main">
      <router-view class="main"/>
    </div>
    <div class="layout-footer">
      <Footer />
    </div>
    <TopButton :default-bottom-position="32" :footer-height="52" />
  </div>
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
html, body {
  height: 100%;
}

.layout {
  position: relative;
  min-height: 100%;
  // background-color: #f7f8f8;

  .layout-header {
    max-height: 55px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    // min-width: 964px;
    max-height: 66px;
    background-color: #000;
  }
  
  .layout-main {
    position: relative;
    min-height: 100%;
    padding-bottom: 70px;
    box-sizing: border-box;    

    .main {
      overflow-x: auto;

      @include respond-below(large) {
        margin-left: auto;
        overflow-x: unset;
      }

      @include respond-below(small) {
        padding-bottom: 110px;
      }

      &.has-left {
        margin-left: 286px;

        @include respond-below(large) {
          margin-left: auto;
        }

        @include respond-below(small) {
          padding-top: 49px;
        }
      }
    }
  }

  .layout-footer {
    position: absolute;
    bottom: 0;
    z-index: 20;
    width: 100%;
    // min-width: 964px;
    padding: 5px 32px;
    background-color: #000;
    box-sizing: border-box;

    @include respond-below(small) {
      min-width: 320px;
      margin-top: -152px;
      padding: 20px 16px 23px;
    }
  }
}

</style>
