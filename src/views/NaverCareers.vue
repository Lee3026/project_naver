<template>
  <div class="naver_careers">
    <Swiper></Swiper>
    <section class="searchWrap">
      <div class="searchInner">
        <div class="iconBox">
          <span class="icon_search"></span>
        </div>
        <div class="inputBox">
          <label for="keyword" class="label">키워드</label>
          <input type="text" id="keyword" placeholder="프론트엔드 개발자">
        </div>
        <div class="selectBox">
          <span class="label">법인</span>
          <select class="select" :class="{active:isActive}" @click="isActive = !isActive">
            <option value="" selected disabled class="red">법인선택</option>
            <option value="NAVER">NAVER</option>
            <option value="Cloud">NAVER Cloud</option>
            <option value="MOBILE">WORKS MOBILE</option>
            <option value="SNOW">SNOW</option>
            <option value="LABS">NAVER LABS</option>
            <option value="WEBTOON">NAVER WEBTOON</option>
            <option value="FINANCIAL">NAVER FINANCIAL</option>
            <option value="IS">NAVER I&amp;S</option>
          </select>
        </div>
        <div class="selectBox">
          <span class="label">직군</span>
          <select class="select" :class="{active:isOpen}" @click-outside="isOpen = !isOpen">
            <option value="" disabled selected>직군선택</option>
            <option value="Tech">Tech</option>
            <option value="Design">Design</option>
            <option value="Service">Service &amp; Business</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>
        <div class="btnBox">
          <button type="button" class="searchBtn">검색</button>
        </div>
      </div>
    </section>
    <section class="teamsWrap section">
      <div class="inner">
        <div class="titleBox">
          <h3 class="title">Teams</h3>
          <p class="desc">서로 다른 사람들이 모여 한 방향으로 나아갑니다</p>
          <a href="javascript:;" class="moreLink">Learn more</a>
        </div>
      </div>
      <div class="listBox">
          <ul class="list">
            <li class="tech">
              <a href="javascript:;" class="link">
                <div class="inner">
                  <dl class="dList">
                    <dt class="dtBox">
                      <span class="title">Tech</span>
                      <span class="num">68</span>
                    </dt>
                    <dd class="desc">다가오는 미래를 구현합니다</dd>
                  </dl>
                </div>
              </a>
            </li>
            <li class="tech">
              <a href="javascript:;" class="link">
                <div class="inner">
                  <dl class="dList">
                    <dt class="dtBox">
                      <span class="title">Design</span>
                      <span class="num">1</span>
                    </dt>
                    <dd class="desc">경험을 설계합니다</dd>
                  </dl>
                </div>
              </a>
            </li>
            <li class="tech">
              <a href="javascript:;" class="link">
                <div class="inner">
                  <dl class="dList">
                    <dt class="dtBox">
                      <span class="title">Service & Business</span>
                      <span class="num">21</span>
                    </dt>
                    <dd class="desc">일상을 풍요롭게 합니다</dd>
                  </dl>
                </div>
              </a>
            </li>
            <li class="tech">
              <a href="javascript:;" class="link">
                <div class="inner">
                  <dl class="dList">
                    <dt class="dtBox">
                      <span class="title">Corporate</span>
                      <span class="num">8</span>
                    </dt>
                    <dd class="desc">네이버의 추진력을 만듭니다</dd>
                  </dl>
                </div>
              </a>
            </li>
          </ul>
      </div>
    </section>
    <section class="peopleWrap section">
      <div class="inner">
       <div class="titleBox">
          <h3 class="title">People</h3>
          <p class="desc">성장을 위한 가장 확실한 방법은 뛰어난 동료들 사이에 있는 것입니다</p>
          <a href="javascript:;" class="moreLink">Learn more</a>
        </div>
        <div class="visualBox">
          <Swiper2></Swiper2>
        </div>
      </div>
    </section>
    <section class="benefitsWrap section">
      <div class="inner">
       <div class="titleBox">
          <h3 class="title">Benefits</h3>
          <p class="desc">네이버의 일하는 문화는 계속 진화합니다</p>
          <a href="javascript:;" class="moreLink">Learn more</a>
        </div>
        <div class="visualBox">
          <Swiper3></Swiper3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue';
import Swiper2 from '@/components/Swiper2.vue';
import Swiper3 from '@/components/Swiper3.vue';
// import vClickOutside from 'v-click-outside'

export default {
  name: 'NaverCareeres',
  // directives: {
  //   clickOutside: vClickOutside.directive
  // },
  components: {
    Swiper,
    Swiper2,
    Swiper3,
  },
  data(){
    return { 
      isOpen: false,
      isActive: false,
      swiperOption01: {
        speed: 800,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
      swiperOption02: {
        speed: 800,
        loop: true,
        centeredSlides: false,
        slidesPerView: 1.5,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
      swiperOption3:{
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  .naver_careers{
    background-color: #fafafa;
  .searchWrap{
    position: relative;
    display: flex;
    position: relative;
    top: -30px;
    z-index: 1111;
    .searchInner{
      display: flex;
      flex-direction: row;
      background-color: #fff;
      color: #000;
      margin: 0 auto;
      .iconBox{
        display: flex;
        align-items: center;
        padding: 0 28px 0 21px;
        .icon_search{
          background: url('../assets/img/logo.png') no-repeat;
          background-size: 328px 205px;
          display: block;
          background-position: -245px -40px;
          width: 18px;
          height: 18px;
        }
      }
    .label{
      font-size: 14px;
      line-height: 54px;
      color: #000;
      font-weight: bold;
      margin-right: 9px;
    }
    input{
      width: 278px;
      height: 54px;
      padding-right: 20px;
      font-size: 14px;
      font-weight: bold;
      line-height: 54px;
      border: none;
      &::placeholder{
        color: #b4b4b4;
        font-weight: bold;
      }
    }
    .select{
      appearance: none;
      width: 320px;
      height: 54px;
      padding-right: 20px;
      font-size: 14px;
      font-weight: bold;
      line-height: 54px;
      border: none;
      padding: 0 25px 0 9px;
      font-size: 14px;
      font-weight: bold;
      line-height: 54px;
      letter-spacing: -0.3px;
      text-align: left;
      color: #d0d0d0;
      cursor: pointer;
      background-image: url('../assets/img/ico_arrow_down.png');
      background-position: calc(100% - 10px) center;
      background-repeat: no-repeat;
      background-color: #ffffff;
      background-size: 8px 5px;
      box-sizing: border-box;
       &.active {
         background-image: url('../assets/img/ico_arrow_up.png');
         color: #000;
      }
    }
    .btnBox{
      .searchBtn{
        border: none;
        width: 97px;
        height: 54px;
        line-height: 54px;
        background-color: #000;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        &:hover{
          background-color: #16ef72;
          color: #000;
        }
      }
    }
   
    }
  }
   //team 
    .section{
      padding: 95px 0 0;
      + .section {
        padding: 112px 0 0;
      }
      .inner{
        padding: 0 104px 0;
        text-align: left;
        color: #000;
        position: relative;
        max-width: 1408px;
        min-width: 1230px;
        margin: 0 auto;
        box-sizing: border-box;
        h3{
          font-size: 64px;
          line-height: 71px;
          letter-spacing: -0.64px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .desc{
          display: inline;
          vertical-align: middle;
          padding-right: 30px;
          font-size: 22px;
          line-height: 32px;
          letter-spacing: -0.44px;
          font-weight: bold;
        }
        .moreLink{
          position: relative;
          display: inline-block;
          vertical-align: top;
          font-size: 14px;
          line-height: 18px;
          font-weight: normal;
          letter-spacing: -0.36px;
          color: #000;
          &::before{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            background-color: #000;
          }
        }
      }
       .listBox{
          margin-top: 70px;
          padding-bottom: 89px;
            .link{
              display: block;
              color: #000;
              font-size: 0;
              &:hover{
                background-color: #ebebeb;
                color: #000;
              } 
            }
          .inner{
            position: relative;
            max-width: 1408px;
            min-width: 1230px;
            padding: 0 104px;
            margin: 0 auto;
            text-align: left;
            box-sizing: border-box;
            .dtBox{
              padding: 20px 0;
              display: inline-block;
              vertical-align: top;
              width: 50%;
              color: #000;
              .title{
                display: inline-block;
                vertical-align: top;
                font-size: 38px;
                line-height: 60px;
                letter-spacing: -0.34px;
                font-weight: normal;
              }
              .num{
                margin-top: 13px;
                position: relative;
                display: inline-block;
                vertical-align: top;
                margin-left: 18px;
                font-size: 15px;
                letter-spacing: -0.3px;
                &::before{
                  background: url('../assets/img/logo.png') no-repeat ;
                  background-size: 328px 205px;
                  content: "";
                  position: absolute;
                  top: -1px;
                  right: -14px;
                  background-position: -176px -105px;
                  width: 9px;
                  height: 9px;
                }
              }
            }
            .desc{
              padding: 20px 0 20px 15px;
              display: inline-block;
              vertical-align: top;
              width: 50%;
              font-size: 22px;
              color: #000;
              line-height: 60px;
              letter-spacing: -0.44px;
              box-sizing: border-box;
            }
          }
        }
      }
    .peopleWrap{
      background-color: #fff;
      padding-bottom: 0;
      .visualBox{
        margin: 60px 0 0;
        position: relative;
        display: block;
      }
    }
    .benefitsWrap{
      background-color: #fff;
      .visualBox{
        margin: 60px 0 0;
        position: relative;
        display: block;
      }
    }
  }
</style>
