<template>
  <div class="main-wrapper">
    <!--导航-->
    <div class="header">
      <img src="../../assets/images/icon-menu.png" class="icon-menu">
      <img src="../../assets/images/icon-logo.png" class="logo-img">
    </div>
    <!--banner container-->
    <div class="banner-container">
      <!--<img src="../../assets/images/img" class="img-banner">-->
      <div class="banner-text">
        START<br>
        DIN<br>
        HYGGE
      </div>
    </div>
    <!--goods one-->
    <div class="shelf-container">
      <div class="shelf-text--container">
        <p class="shelf-title">Link 墙面置物架</p>
        <div class="shelf-category">
          <p>收纳便捷</p>
          <p class="square"></p>
          <p>多种组合</p>
          <p class="square"></p>
          <p>创新曲木</p>
        </div>
      </div>
    </div>
    <div class="shelf-swiper--container">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img class="shelf-shuffling-one shelf-shuffling" src="../../assets/images/shelf-shuffling-one.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="shelf-shuffling-two shelf-shuffling" src="../../assets/images/shelf-shuffling-two.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="shelf-shuffling-three shelf-shuffling" src="../../assets/images/shelf-shuffling-three.png" alt="">
        </swiper-slide>

        <!-- Add Pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--goods two-->
    <div class="shelf-container">
      <div class="shelf-text--container">
        <p class="shelf-title">Hygge 曲木摇椅</p>
        <div class="shelf-category">
          <p>坐趟舒适</p>
          <p class="square"></p>
          <p>大角度摇摆</p>
          <p class="square"></p>
          <p>创新曲木</p>
        </div>
      </div>
    </div>
    <div class="shelf-swiper--container">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img class="shelf-shuffling-one shelf-shuffling" src="../../assets/images/shelf-shuffling-one.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="shelf-shuffling-two shelf-shuffling" src="../../assets/images/shelf-shuffling-two.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="shelf-shuffling-three shelf-shuffling" src="../../assets/images/shelf-shuffling-three.png" alt="">
        </swiper-slide>

        <!-- Add Pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--goods three-->
    <div class="shelf-container">
      <div class="shelf-text--container">
        <p class="shelf-title">Hygge 曲木凳</p>
        <div class="shelf-category">
          <p>经典百搭</p>
          <p class="square"></p>
          <p>实用性强</p>
          <p class="square"></p>
          <p>创新曲木</p>
        </div>
      </div>
    </div>
    <div class="shelf-swiper--container">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img class="shelf-shuffling-one shelf-shuffling" src="../../assets/images/shelf-shuffling-one.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="shelf-shuffling-two shelf-shuffling" src="../../assets/images/shelf-shuffling-two.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="shelf-shuffling-three shelf-shuffling" src="../../assets/images/shelf-shuffling-three.png" alt="">
        </swiper-slide>

        <!-- Add Pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  <!--footer-->
    <div class="footer-container">
      <img src="../../assets/images/icon-footer-logo.png" class="icon-footer-logo">
      <div class="footer-diviMore--serviceder">
        <p class="perhaps-team">或许团队</p>
        <p class="business-cooperation">商务合作</p>
        <p class="working-time">工作日9:30-18:30</p>
        <p class="phone-number">400-048-0806</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'perhapsIndax',
    data () {
      return {
        swiperOption: {
          autoplay: true,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          pagination: {
            el: '.swiper-pagination',
          }
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // }
        }
      }
    },
    methods: {
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  .main-wrapper{
    width: 100%;
    .header{
      height: 110px;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .icon-menu{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 67px;
      }
      .logo-img{
        width: 112px;
        height: 72px;
      }
    }
    .banner-container{
      width: 100%;
      height: 1180px;
      background-color: pink;
      .img-banner{
        width: 100%;
        height: 1180px;
        background-color: pink;
      }
      .banner-text{
        font-size: 70px;
        font-weight: 500;
        color: rgba(255,255,255,1);
        transform: translateY(175px);
        line-height: 80px;
        letter-spacing: 8px;
      }
    }
    .shelf-container{
      width: 100%;
      height: 500px;
      background-color: #FBFAF7;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .shelf-text--container{
        .shelf-title{
          font-size: 70px;
          font-weight: 500;
          color: rgba(18,57,50,1);
        }
        .shelf-category{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 55px;
          .square{
            width: 9px;
            height: 9px;
            background: rgba(18,57,50,1);
            margin: 0 20px;
          }
        }
      }
    }
    .shelf-swiper--container{
      .shelf-shuffling{
        width: 100%;
        height: 900px;
      }
    }
    .footer-container{
      width: 100%;
      padding: 100px 0 130px;
      background-color: black;
      /*background: url("../../assets/images/bag-footer.png");*/
      background-size: 100% 100%;
      .icon-footer-logo{
        width: 240px;
        height: 77px;
      }
      .footer-diviMore--serviceder{
        width: 80%;
        border-top: 1px solid white;
        margin: 30px auto 0;
        .perhaps-team{
          margin-top: 55px;
          font-size: 36px;
          font-weight: 400;
          color: rgba(255,255,255,1);
        }
        .business-cooperation{
          margin-top: 55px;
          font-size: 36px;
          font-weight: 400;
          color: rgba(255,255,255,1);
          opacity: 0.4;
        }
        .working-time{
          margin-top: 55px;
          font-size:29px;
          font-weight:400;
          color:rgba(255,255,255,1);
          opacity:0.7;
        }
        .phone-number{
          margin-top: 20px;
          font-size:60px;
          font-weight:300;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
</style>
