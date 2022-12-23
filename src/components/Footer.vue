<template>
  <footer class="footer">
    <div class="inner">
      <h1 class="logo">
        <a href="javascript:;" class="link">© NAVER Corp.</a>
      </h1>
      <span class="policy">
        <a class="link" href="javascript:;">
        <strong class="accent">개인정보 처리방침</strong>
      </a>
      </span>
      <div class="relate" :class="{active:isActive}">
        <button type="button" class="relateBtn" @click="isActive = !isActive">관련 사이트</button>
        <div class="listBox">
          <ul class="list">
            <li class="item"><a href="#none" class="link">NAVER Corp</a></li>
            <li class="item"><a href="javascript:;" class="link">NAVER Cloud</a></li>
            <li class="item"><a href="javascript:;" class="link">WORKS MOBILE</a></li>
            <li class="item"><a href="javascript:;" class="link">SNOW</a></li>
            <li class="item"><a href="javascript:;" class="link">NAVER LABS</a></li>
            <li class="item"><a href="javascript:;" class="link">NAVER WEBTOON</a></li>
            <li class="item"><a href="javascript:;" class="link">NAVER FINANCIAL</a></li>
            <li class="item"><a href="javascript:;" class="link">NAVER I&amp;S</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'Footer',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data(){
    return {
      isActive: false,
      tabOpened: false,
    };
  },
  methods: {
    selectOpen() {
      this.isActive = this.isActive ? false : true;
    },
  }
};
</script>
<style lang="scss" scoped>
.footer {
  .inner{
    position: static;
    display: flex;
    align-items: center;
    padding: 25px 104px 25px 98px;
    background-color: #f2f2f2;
    .logo{
      font-size: 18px;
      line-height: 32px;
      letter-spacing: -0.32px;
      .link{
        display: block;
        color: #000;
      }
    }
    .policy{
      margin-left: 30px;
      .link{
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.28px;
        color: #909090;
        font-weight: bold;
      }
    }
    .relate{
      position: relative;
      margin-left: auto;
      &.active{
        .relateBtn{
          padding: 0 12px;
          background-color: #fff;
          &::after{
            height: 0;
          }
          &::before{
            transform: rotate(180deg);
            right: 5px;
          }
        }
        .listBox{
          display: block;
        }
      }
      .relateBtn{
        border: none;
        position: relative;
        width: 280px;
        line-height: 42px;
        text-align: left;
        background-color: #f2f2f2;
        cursor: pointer;
        &::before{
          content: "";
          position: absolute;
          top: 18px;
          right: 0;
          background: url('../assets/img/logo.png') no-repeat ;
          background-size: 328px 205px;
          background-position: -122px -93px;
          width: 10px;
          height: 6px;
          z-index: 100;
        }
        &::after{
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #000;
        }
      }
      .listBox{
        display: none;
        position: absolute;
        bottom: 42px;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 1000;
        .list{
          .item{
            padding: 0 12px;
            .link{
              font-size: 18px;
              line-height: 42px;
              color: #000;
              display: block;
              font-weight: bold;
            }
          }
        }
      }
    
    }
  }
}
</style>