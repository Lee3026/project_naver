<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="slidesBox">
        <a href="javascript:;">
          <div class="contents">
            <img class="slide_img" src="@/assets/img/img_slide2_1.jpg" alt="NAVER LABS 박경식님 이미지">
          </div>
          <div class="contTxt">
              <p class="common_title_wrap">
                <span class="common_title">로봇을 만들기 위해 사람을 공부합니다</span>
              </p>
              <span class="link_type black_line">Interview</span>
              <p class="common_sm_text">
                <span class="company">NAVER LABS</span>
                <span class="name">박경식</span>
              </p>
          </div>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
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
    height: 520px;
    width: 1097px;
  
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
    }
  }
</style>
scss


