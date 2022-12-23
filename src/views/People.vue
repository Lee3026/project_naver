<template>
<div class="people">
<Title></Title>
<section class="peopleWrap">
  <div class="inner">
    <ul class="list">
      <li 
        class="item left" 
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        <a href="javascript:;" class="link">
          <div class="imgBox left">
            <img src="@/assets/img/bg_people_01.jpg" alt="">
          </div>
          <div class="textBox">
            <p class="title">로봇을 만들기 위해 사람을 공부합니다</p>
            <p class="info">
              <span class="company">NAVER LABS</span>
              <span class="name">박경식</span>
            </p>
          </div>
        </a>
      </li>
      <li 
        class="item right" 
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        <a href="javascript:;" class="link">
          <div class="imgBox right">
            <img src="@/assets/img/bg_people_03.jpg" alt="">
          </div>
          <div class="textBox">
            <p class="title">성장의 화두를 만드는 일</p>
            <p class="info">
              <span class="company">NAVER LABS</span>
              <span class="name">고은경</span>
            </p>
          </div>
        </a>
      </li>
      <li 
        class="item left" 
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        <a href="javascript:;" class="link">
          <div class="imgBox right">
            <img src="@/assets/img/bg_people_04.jpg" alt="">
          </div>
          <div class="textBox">
            <p class="title">기술로 취향 저격</p>
            <p class="info">
              <span class="company">NAVER</span>
              <span class="name">김도희</span>
            </p>
          </div>
        </a>
      </li>
      <li 
        class="item right" 
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        <a href="javascript:;" class="link">
          <div class="imgBox left">
            <img src="@/assets/img/bg_people_05.jpg" alt="">
          </div>
          <div class="textBox">
            <p class="title">실패를 감수하는 마음</p>
            <p class="info">
              <span class="company">NAVER</span>
              <span class="name">서명원</span>
            </p>
          </div>
        </a>
      </li>
       <li 
        class="item left" 
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        <a href="javascript:;" class="link">
          <div class="imgBox left">
            <img src="@/assets/img/bg_people_06.jpg" alt="">
          </div>
          <div class="textBox">
            <p class="title">실패를 감수하는 마음</p>
            <p class="info">
              <span class="company">NAVER</span>
              <span class="name">서명원</span>
            </p>
          </div>
        </a>
      </li>
       <li 
        class="item right" 
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        <a href="javascript:;" class="link">
          <div class="imgBox right">
            <img src="@/assets/img/bg_people_07.jpg" alt="">
          </div>
          <div class="textBox">
            <p class="title">기술로 취향 저격</p>
            <p class="info">
              <span class="company">NAVER</span>
              <span class="name">김도희</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

</div>
</template>

<script>
  import Title from '@/components/Title.vue';
  export default {
    name: 'People',
    components: {
      Title
    },
    data() {
      return {
       
      }
    }
  }
</script>

<style lang="scss" scoped>
.peopleWrap{
  background-color: #fff;
  .inner{
    padding: 0 104px 0;
    text-align: left;
    position: relative;
    max-width: 1408px;
    min-width: 1230px;
    margin: 0 auto;
    box-sizing: border-box;
      ul{
        &::after{
          content: "";
          display: block;
          clear: both;
        }
        li {
          width: 50%;
          height: auto;
          padding: 0 15px;
          box-sizing: border-box;
          margin-top: 70px;
          &:first-child,
          &:nth-child(2){
            margin-top: 0;
          }
          &.left{
            float: left;
          }
          &.right{
            float: right;
          }
          a.link{
            .imgBox{
              position: relative;
              &.left{
                padding-bottom: 67.353%;
              }
              &.right{
                padding-bottom: 150.43%;
              }
              img{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
              }
            }
            .textBox{
              padding-top: 30px;
              .title{
                line-height: 36px;
                font-size: 25px;
                letter-spacing: -0.5px;
                font-weight: bold;
                color: #000;
              }
              .info{
                display: inline;
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
                    left: -8px;
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
      }
  }
}
</style>



