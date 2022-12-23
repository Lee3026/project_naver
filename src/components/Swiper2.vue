<template>
  <swiper class="swiper" :options="swiperOption" 
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_slide2_1.jpg" alt="NAVER LABS 박경식님 이미지">
        </div>
        <div class="contTxt">
            <p class="desc">로봇을 만들기 위해 사람을 공부합니다</p>
            <span class="badge">Interview</span>
            <p class="info">
              <span class="company">NAVER LABS</span>
              <span class="name">박경식</span>
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_slide2_3.jpg" alt="NAVER LABS 박경식님 이미지">
        </div>
         <div class="contTxt">
            <p class="desc">로봇을 만들기 위해 사람을 공부합니다</p>
            <span class="badge">Interview</span>
            <p class="info">
              <span class="company">NAVER LABS</span>
              <span class="name">박경식</span>
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_slide2_4.jpg" alt="NAVER LABS 박경식님 이미지">
        </div>
         <div class="contTxt">
            <p class="desc">로봇을 만들기 위해 사람을 공부합니다</p>
            <span class="badge">Interview</span>
            <p class="info">
              <span class="company">NAVER LABS</span>
              <span class="name">박경식</span>
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_slide2_5.jpg" alt="NAVER LABS 박경식님 이미지">
        </div>
        <div class="contTxt">
            <p class="desc">로봇을 만들기 위해 사람을 공부합니다</p>
            <span class="badge">Interview</span>
            <p class="info">
              <span class="company">NAVER LABS</span>
              <span class="name">박경식</span>
            </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <div class="slidesBox">
        <div class="contents">
          <img class="slideImg" src="@/assets/img/img_slide2_6.jpg" alt="NAVER LABS 박경식님 이미지">
        </div>
         <div class="contTxt">
            <p class="desc">로봇을 만들기 위해 사람을 공부합니다</p>
            <span class="badge">Interview</span>
            <p class="info">
              <span class="company">NAVER LABS</span>
              <span class="name">박경식</span>
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
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
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
          slidesPerView: 1.2,
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
          .badge{
            position: relative;
            margin-top: 4px;
            display: inline-block;
            vertical-align: top;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: -0.36px;
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
          .info{
            margin-top: 16px;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.28px;
            color: #000;
            .name{
              position: relative;
              display: inline-block;
              margin-left: 12px;
              &::before{
                content: "";
                position: absolute;
                left: -6px;
                top: 6px;
                width: 1px;
                height: 10px;
                background-color: #000;
              }
            }
          }
        }
      }
    }
    
    // &:first-child
    // {
    //   padding-left: 217px;
    // }
  }
</style>



