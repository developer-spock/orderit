<!-- *****************************************************************************************************
 1. 프로그램 명   : top-button
 2. 프로그램 용도 : 스크롤을 TOP으로 이동시켜주는 버튼
 3. 작성자        : 박해수
 4. 작성일        : 2021.01.23
****************************************************************************************************** -->
<template> 
  <div id="top-button-comp">
    <button class="button is-light is-hidden-mobile top-button" @click="scrollTop" :class="{'is-active': btnShow}" :style="'bottom: '+bottomPosition+'px; right: '+rightPosition+'px;'">
      <span class="icon is-small">
        <i class="fas fa-arrow-up"></i>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'top-button',
  props: ['defaultBottomPosition', 'footerHeight'],
  data() {
    return {
      btnShow: false,
      btnShowBottom: false,
      defaultPosition: parseInt(this.defaultBottomPosition ? this.defaultBottomPosition : 32, 10),
      rightPosition: parseInt(this.defaultBottomPosition ? this.defaultBottomPosition : 32, 10),
      bottomPosition: parseInt(this.defaultBottomPosition ? this.defaultBottomPosition : 32, 10),
    }
  },
  methods: {
    handleScroll: function() {
      try{
        this.btnShow = window.scrollY > 0;
        this.btnShowBottom = document.body.scrollHeight - window.innerHeight - window.scrollY < this.footerHeight;
        
        if(this.btnShowBottom) {
          var addPosition = parseInt(this.footerHeight - (document.body.scrollHeight - window.innerHeight - window.scrollY),10);
          this.bottomPosition = this.defaultPosition + addPosition;
        }
        else {
          this.bottomPosition = this.defaultPosition;
        }
      } catch (err) {
        console.error("top-button.vue > methods > handleScroll error :" + err);
      }
    },
    scrollTop: function() {
      try{
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId)
          }
          window.scroll(0, window.pageYOffset - 50)
        }, 20)
      } catch (err) {
        console.error("top-button.vue > methods > scrollTop error :" + err);
      }
    },
  },
  beforeMount() {
    try{
      window.addEventListener("scroll", this.handleScroll);
    } catch (err) {
      console.error("top-button.vue > beforeMount :" + err);
    }
  },
  beforeUnmount() {
    try{
      window.removeEventListener("scroll", this.handleScroll);
    } catch (err) {
      console.error("top-button.vue > beforeDestroy :" + err);
    }
  }
}
</script>

<style lang="scss" scope>
#top-button-comp {
  .top-button {
    position: fixed;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.25s;
    padding: 20px;
    
    &.is-active {
      opacity: 1;
    }
    &.in-bottom {
      bottom: 125px;
    }
  }
}
</style>

    