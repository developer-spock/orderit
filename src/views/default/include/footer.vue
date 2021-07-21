<!-- *****************************************************************************************************
 1. 프로그램 명   : 시스템 관리 - 푸터
 2. 프로그램 용도 : 시스템 관리 - 푸터 화면
 3. 작성자        : 박해수
 4. 작성일        : 2020.01.17
****************************************************************************************************** -->
<template>
  <div>
    <div class="inner_foot">
      <div class="area_familysite">
        <div class="opt_relation">
          <div class="box_site">
            <a href="#!" class="link_site">오더릿 이용약관</a>
            <span class="txt_bar">|</span>
            <a href="#!" class="link_site">개인정보 처리방침</a>
            <span class="txt_bar">|</span>
            <a href="#!" class="link_site">운영 정책</a>
            <span class="txt_bar">|</span>
            <a href="#!" class="link_site">고객센터</a>
            <span class="txt_bar">|</span>
            <a href="#!" class="link_site">공지사항</a>
          </div>
        </div>
      </div>
      <div class="area_copyright">
        <small class="txt_copy">© <a href="/">ORDERIT Corp.</a></small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signupAgreeModalOpenType: 1,
    }
  },
  mounted: function() {

  },
  methods: {
    
  },
}
</script>

<style lang="scss" scope>
.footer { 
  background-color: #000;
}

.inner_foot {
  position: relative;
  min-height: 40px;

  .area_familysite {
    position: absolute;
    top: 0;
    right: 0;

    .box_site {
      float: right;
      margin-top: 2px;

      .link_site {
        font-size: 12px;
        line-height: 40px;
        color: hsla(0,0%,100%,.8);
        transition: color .25s;
      }
      .txt_bar {
        margin: 0 15px;
        font-size: 12px;
        line-height: 40px;
        color: #33343b;
      }
    }

    @include respond-below(small) {
      position: static;
    }
  }
  .area_copyright {
    position: absolute;
    top: 2px;
    left: 0;
    font-size: 0;

    .txt_copy {
      display: inline-block;
      font-size: 13px;
      line-height: 40px;
      color: #fdd000;
      font-family: "Compton Book","Malgun Gothic","맑은 고딕","Apple SD Gothic Neo","돋움",dotum,sans-serif;
      vertical-align: top;

      a {
        color: #fdd000;
      }
    }

    @include respond-below(small) {
      position: static;
      margin-top: 10px;
    }
  }
}
</style>