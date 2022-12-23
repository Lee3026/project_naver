<template>
  <section class="applyWrap">
    <div class="inner">
        <h3 class="title">Board the Navership</h3>
        <a href="javascript:;" class="link">
          <span class="text">지원하기</span>
          <span class="icon"></span>
        </a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.applyWrap{
  padding: 95px 0 102px;
  background-color: #fff;
  .inner{
    position: relative;
    max-width: 1408px;
    min-width: 1230px;
    padding: 0 104px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: left;
    h3{
      font-size: 25px;
      line-height: 32px;
      letter-spacing: -0.25px;
      color: #000;
    }
    .link{
      display: inline-block;
      vertical-align: top;
      margin-top: 18px;
      font-size: 0;
      .text{
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.36px;
        color: #000;
      }
      .icon{
        background: url('../assets/img/logo.png') no-repeat ;
        background-size: 328px 205px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 11px;
        background-position: -76px -172px;
        width: 32px;
        height: 32px;
        width: 33px;
      }
    }
  }
}
</style>