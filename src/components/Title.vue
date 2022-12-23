<template>
  <section class="titleWrap">
    <div class="inner">
        <div class="titleBox">
            <div class="title_text">
                <h2 class="title">People</h2>
            </div>
            <div class="title_desc">
                <h3 class="desc">
                    성장을 위한 가장 확실한 방법은<br>
                    뛰어난 동료들 사이에 있는 것입니다
                </h3>
            </div>
        </div>
    </div>
</section>
</template>
<style lang="scss" scoped>
.titleWrap{
    padding: 160px 0 145px;
    background-color: #fff;
    .inner{
        position: relative;
        max-width: 1408px;
        min-width: 1230px;
        padding: 0 104px;
        margin: 0 auto;
        box-sizing: border-box;
        text-align: left;
        .titleBox{
            width: 100%;
            .title_text{
                width: 50%;
                display: inline-block;
                h2{
                font-size: 64px;
                line-height: 72px;
                letter-spacing: -0.64px;
                font-weight: bold;
                }
            }
            .title_desc{
                width: 50%;
                display: inline-block;
                padding-left: 16px;
                box-sizing: border-box;
                .desc{
                    font-size: 25px;
                    line-height: 40px;
                    letter-spacing: -0.5px;
                }
            }
            
        }
        
  }
}
</style>