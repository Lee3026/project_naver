<template>
  <swiper class="swiper-wrapper" :options="swiperOption">
    <swiper-slide class="swiper-slide" ref="slides" v-for="(name, index) in images" :key="index">
      <div class="contents">
        <video class="contVideo" autoplay="" muted="" playsinline="" loop="">
          <source :src="require(`@/assets/img/${name}`)" type="video/mp4">
        </video>
        <div class="contTxt">
            <p class="slideText">
              Board the Navership
            </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-default',
    title: 'Default',
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      globalOptions: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    data() {
      return {
        images: ['video_02.mp4','video_03.mp4','video_01.mp4'],
        // title: [
        //   { text: Navigate New Horizons }
        //   { text: Board the Navership }
        //   { text: Navigate New Horizons }
        // ],
        swiperOption: {
          speed: 800,
          loop: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        },
      };
    },
  }
</script>
<style lang="scss" scoped>
.swiper-wrapper{
  font-size: 0;
  .swiper-slide{
    position: relative;
    width: 100%;
    height: auto;
    .contents{
      width: 100%;
      height: auto;
      .contVideo{
        width: 100%;
        height: 553px;
        object-fit: cover;
      }
      .contTxt{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .slideText{
          overflow: hidden;
          font-size: 100px;
          letter-spacing: -2.4px;
          font-weight: bold;
          white-space: nowrap;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
        }
      }
    }
   &.swiper-slide-active{
     .contTxt{
      .slideText{
          // animation: fadeInRight 1s ease-in-out;
          animation: wave-in 0.3s ease-out forwards, fade 0.8s linear forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
        // @keyframes fadeInRight {
        //   from {
        //     opacity: 0;
        //     transform: translateX(300px);
        //   }
        //   to {
        //     opacity: 1;
        //   }
        // }
        @keyframes wave-in {
          0% {
            width: 0%;
          }
          50% {
            width: 50%;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        }
      }
    } 
  }
</style>

