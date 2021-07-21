<!-- *****************************************************************************************************
 1. 프로그램 명   : index 페이지 (레이아웃)
 2. 프로그램 용도 : 화면의 레이아웃을 구성하고, router에 따라 나타날 router-view의 레이아웃을 가진 페이지
 3. 작성자        : 박해수
 4. 작성일        : 2020.01.10
****************************************************************************************************** -->
<template>
  <vue-progress-bar></vue-progress-bar>
  <router-view />
</template>

<script>
import '@/assets/scss/theme/theme.scss'
import '@/assets/scss/base/typography.scss'

export default {
  name: "app",
  components: {
  },
  mounted: function() {
    this.$Progress.finish();  
    this.$router.push({ name: 'main' });
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
};
</script>

<style>
</style>