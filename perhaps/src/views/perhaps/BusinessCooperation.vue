<template>
  <div class="main-wrapper">
    <!--header-->
    <FxHeader></FxHeader>
    <!--banner-->
    <div class="banner-container">
      <img src="http://plbch8j6c.bkt.clouddn.com/business-img-one.png" class="business-img--one">
      <div class="banner-text-container">
        <p class="banner-text--title">品牌介绍</p>
        <p class="banner-text--block">
          或许专注提供高设计高品质的曲木家具和创意家居产品。我们向受包豪斯影响的经典美学以及北欧设计学习。<br/>
          品牌主张是“延续经典”和“舒适耐用”，研究生活的基本面，同时关注技术创新。与全球设计师合作，结合中国顶级供应商，运用新材料和工艺，为用户打造理想中的家。
        </p>
      </div>
    </div>
    <div class="gray-block"></div>
    <!--介绍-->
    <div class="introduce-container">
      <p class="introduce--title">
        START DIN HYGGE<br/>
        开启你的幸福感
      </p>
      <!--供应链-->
      <div class="supply-chain--container">
        <img src="http://plbch8j6c.bkt.clouddn.com/business-supply.png" class="business-supply--img">
        <p class="supply-chain--title">TOP级供应链</p>
        <p class="supply-chain--text">
          秉承友善环境的初衷，或许采用对环境负担最小的材料与制程：甄选优质进口原材料，并使用宜家等大厂在中国的一流供应商，且生产过程严格把控，以保证产品的高质与环保。
        </p>
      </div>
      <!--跨国设计团队-->
      <div class="supply-chain--container multinational-design--container">
        <img src="http://plbch8j6c.bkt.clouddn.com/business-design.png" class="business-supply--img multinational-design-img">
        <p class="supply-chain--title multinational-design--title">跨国设计团队</p>
        <p class="supply-chain--text multinational-design--text">
          或许签约多位来自丹麦、芬兰、日本等国的一流家居和建筑设计师。国内团队在原版设计的基础上根据中国人机尺寸、居住环境进行改造、调整，在降低售价同时保持了产品原有的设计感。有“或许”的品质生活，没那么贵。
        </p>
      </div>
      <!--线上平台-->
      <div class="supply-chain--container online-platform--container">
        <div class="platform-logo--container">
          <ul class="platform-logo-block--top platform-logo-block">
            <li class="platform-data">
              <img src="http://plbch8j6c.bkt.clouddn.com/platform-logo-xmyp.png" class="platform-logo-xmyp platform-logo">
            </li>
            <li class="platform-data">
              <img src="http://plbch8j6c.bkt.clouddn.com/platform-logo-xm.png" class="platform-logo-xm platform-logo">
            </li>
            <li class="platform-data">
              <img src="http://plbch8j6c.bkt.clouddn.com/platform-logo-jd.png" class="platform-logo-jd platform-logo">
            </li>
          </ul>
          <ul class="platform-data-block--buttom platform-logo-block">
            <li class="platform-data">
              <img src="http://plbch8j6c.bkt.clouddn.com/platform-logo-tm.png" class="platform-logo-tm platform-logo">
            </li>
            <li class="platform-data">
              <img src="http://plbch8j6c.bkt.clouddn.com/platform-logo-wykl.png" class="platform-logo-wykl platform-logo">
            </li>
            <li class="platform-data">
              <img src="http://plbch8j6c.bkt.clouddn.com/platform-logo-yx.png" class="platform-logo-yx platform-logo">
            </li>
          </ul>
        </div>

        <p class="supply-chain--title online-platform--title">线上平台</p>
        <p class="supply-chain--text online-platform--text">
          或许与多家知名电商平台均有合作，具有成体系的、强大的线上销售网络，通过不同渠道将产品映射到不同人群，并根据相应特点应用个性化运营销售方案。
        </p>
      </div>
    </div>

    <!--更多了解-->
    <div class="learn-about--container">
      <p class="learn-about--title">更多了解</p>
      <div class="learn-about--box">
        <div class="box-left">
          <p>电话：400-048-0806</p>
          <p>邮箱：inwater@ihuoxu.com</p>
          <p class="box-left--address"><span>地址：</span><span>北京市朝阳区酒仙桥路4号<br/>极地国际创新中心215</span></p>
        </div>
        <div class="box-right">
          <img src="http://plbch8j6c.bkt.clouddn.com/code-img.png" class="code-img">
          <p class="code-name">或许生活</p>
        </div>
      </div>
    </div>
    <!--footer-->
    <FxFooter></FxFooter>
  </div>
</template>
<script>
  import FxHeader from '@/components/block/FxHeader'
  import FxFooter from '@/components/block/FxFooter'
  export default {
    name: 'businessCooperation',
    data () {
      return {

      }
    },
    components: {
      FxHeader,
      FxFooter
    },
    created () {
      document.title = '商务合作'
    }
  }
</script>
<style lang="scss" scoped>
  .main-wrapper{
    width: 100%;
    .banner-container{
      width: 100%;
      .business-img--one{
        width: 100%;
        height: 100%;
      }
      .banner-text-container{
        padding: 110px 50px 110px 50px;
        .banner-text--title{
          font-size: 50px;
          font-weight: 500;
          color: rgba(18,57,50,1);
          line-height: 73px;
          text-align: left;
        }
        .banner-text--block{
          font-size: 30px;
          font-weight: 400;
          color: rgba(18,57,50,1);
          line-height: 45px;
          opacity: 0.9;
          text-align: left;
          margin-top: 30px;
        }
      }
    }
    .gray-block {
      width: 100%;
      height: 10px;
      background: rgba(244,244,244,1);
    }
    .introduce-container{
      padding: 110px 50px 110px 50px;
      .introduce--title{
        font-size: 50px;
        font-weight: 500;
        color: rgba(18,57,50,1);
        line-height: 73px;
        text-align: left;
      }
      .supply-chain--container{
        .business-supply--img{
          width: 100%;
          height: 100%;
          margin-top: 90px;
        }
        .supply-chain--title{
          font-size: 39px;
          font-weight: 500;
          color: rgba(18,57,50,1);
          text-align: left;
          margin-top: 60px;
        }
        .supply-chain--text{
          font-size: 27px;
          font-weight: 400;
          color: rgba(18,57,50,.9);
          line-height: 40px;
          text-align: left;
          margin-top: 27px;
        }
      }
      .online-platform--container{
        .platform-logo--container{
          width: 100%;
          margin-top: 110px;
          .platform-logo-block{
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            align-items: center;
            .platform-data{
              .platform-logo{
                width: 95%;
              }
            }
          }
          .platform-data-block--buttom{
            margin-top: 45px;
          }
        }
      }
    }
    .learn-about--container{
      padding: 100px 0;
      background: rgba(244,244,244,1);
      .learn-about--title{
        width: 85%;
        margin: 0 50px;
        text-align: left;
        font-size: 45px;
        font-weight: 500;
        color: rgba(27,27,27,1);
      }
      .learn-about--box{
        width: 85%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 2px solid rgba(0,0,0,.3);
        margin: 20px 50px 0;
        padding-top: 30px;
        .box-left{
          text-align: left;
          p{
            font-size: 28px;
            font-weight: 400;
            color: rgba(27,27,27,1);
            opacity: 0.9;
            line-height: 48px;
          }
          .box-left--address{
            display: flex;
            flex-direction: row;
          }
        }
        .box-right{
          padding: 0 0 0 35px;
          border-left: 1px solid rgba(0,0,0,.3);
          .code-img{
            width: 150px;
            height: 150px;
          }
          .code-name{
            font-size: 17px;
            font-weight: 400;
            color: rgba(0,0,0,1);
            opacity: 0.7;
            margin-top: 8px;
          }
        }
      }
    }
  }
</style>
