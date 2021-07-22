<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#!">
        <img src="@/assets/images/orderit_code_title.png" height="25">
      </a>

      <a role="button" class="navbar-burger" :class="{'is-active': navbarBurgerIsActive}" aria-label="menu" aria-expanded="false" data-target="navbarBurgerIsActive" @click="navbarBurgerIsActive = !navbarBurgerIsActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBurgerIsActive" class="navbar-menu" :class="{'is-active': navbarBurgerIsActive}">
      <div class="navbar-start">
        <a class="navbar-item" href="#!">웹 개발</a>
        <a class="navbar-item" href="#!">데이터 분석</a>
        <a class="navbar-item" href="#!">정보가시화</a>
        <a class="navbar-item" href="#!">컨설팅</a>
        <a class="navbar-item" href="#!">인공지능</a>
        <a class="navbar-item" href="#!">프로젝트 관리</a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="#!">Sign Up</a>
        <a class="navbar-item" href="#!">Sign In</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
     navbarBurgerIsActive: false,
    }
  },
  watch: {
    '$route' () {
      this.navbarBurgerIsActive = false;
    }
  }, 
}
</script>

<style lang="scss" scope>
.subtitle {
  font-weight: 900;
}
</style>
