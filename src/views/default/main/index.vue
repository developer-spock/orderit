<template>
  <Navbar />
  <router-view />
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
body {
  min-height: 500px;
}
</style>
