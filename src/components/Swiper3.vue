<template>
  <swiper class="swiper" :options="swiperOption" 
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_01.png" alt="img">
        </div>
        <div class="contTxt">
            <p class="desc">Financial Wellbeing</p>
            <p class="desc2">
              회사의 미래가치와 성과를 함께 나누고,<br />
              생활의 안정을 지원합니다.
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_02.png" alt="img">
        </div>
          <div class="contTxt">
            <p class="desc">Financial Wellbeing</p>
            <p class="desc2">
                저마다 몰입할 수 있는 환경이 다름을 알기에<br/>
                시간과 공간 선택의 자율성을 가지며,<br />
                리프레시를 위한 충전의 기회도 마련합니다.
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_03.png" alt="img">
        </div>
          <div class="contTxt">
            <p class="desc">Time & Refresh</p>
            <p class="desc2">
              공간이 우리에게 미치는 영향을 잘 알기에,<br />
              우리가 일할 공간을 직접 설계합니다.
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_04.png" alt="img">
        </div>
        <div class="contTxt">
            <p class="desc">Work Tools</p>
            <p class="desc2">
              최고의 퍼포먼스를 위해
              최적의 장비를 지원합니다.  
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_05.png" alt="img">
        </div>
          <div class="contTxt">
            <p class="desc">Meal & Snack</p>
            <p class="desc2">
              우리를 움직이는 에너지원이자, 동료들과의 대화를<br/>
              이끌어 내는 음식을 풍성하게 제공합니다.
            </p>
        </div>
      </div>
    </swiper-slide>
    <button class="swiper-button-prev swiperBtn" slot="button-prev"></button>
    <button class="swiper-button-next swiperBtn" slot="button-next"></button> 
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-multiple-slides-per-view',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
     setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
    data() {
      return {
        // slideData:[
        //   {
        //     img: img_slide2_1.jpg,
        //     title: 로봇을 만들기 위해 사람을 공부합니다,
        //     name: 
        //   }
        // ],
        swiperOption: {
          // centerPadding: '103px',
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 15,
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    position: relative;
    padding-bottom: 68px;
    .swiperBtn{
      border: none;
      appearance: none;
      background: url('../assets/img/logo.png') no-repeat ;
      background-size: 328px 205px;
      position: absolute;
      top: auto;
      left: auto;
      right: 0;
      bottom: 0;
      width: 32px;
      height: 32px;
    }
    .swiper-button-prev{
      right: 55px;
       background-position: -187px -172px;
      &.swiper-button-disabled{
        background-position: -224px -172px;
      }
      &::after {
        display: none;
      }
    }
    .swiper-button-next {
      right: 15px;
      background-position: -113px -172px;
      &.swiper-button-disabled{
        background-position: -150px -172px;
      }
      &::after {
        display: none;
      }
    }
    .swiper-slide {
      width: 100%;
      position: relative;
      top: 0;
      left: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
      .slidesBox{
        .contents{
          position: relative;
          // padding-bottom: 45%;
          img{
              width: 100%;
              height: 100%;
              object-fit: cover;
          }
        }
        .contTxt{
          margin-top: 30px;
          .desc{
            display: inline;
            padding-right: 26px;
            line-height: 36px;
            font-size: 25px;
            letter-spacing: -0.5px;
            font-weight: bold;
          }
          .desc2{
            margin-top: 20px;
            font-size: 18px;
            line-height: 30px;
            letter-spacing: -0.36px;
            color: #000;
          }
        }
      }
    }
  }
</style>



