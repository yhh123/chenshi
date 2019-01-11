<template>
  <div class="main-wrapper">
    <!--nav-->
    <FxHeader></FxHeader>
    <!--banner container-->
    <div class="banner-container">
      <img src="../../assets/images/img-banner.png" class="img-banner">
      <div class="banner-text--container">
        <p class="banner-text">
          START<br>
          DIN<br>
          HYGGE
        </p>
      </div>
    </div>
    <!--goods one 置物架-->
    <router-link :to="{name:'linkShelf'}">
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
    </router-link>
    <!--goods two 曲木摇椅-->
    <router-link :to="{name:'rockingChair'}">
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
            <img class="shelf-shuffling-one shelf-shuffling" src="../../assets/images/chair-shuffling-one.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="shelf-shuffling-two shelf-shuffling" src="../../assets/images/chair-shuffling-two.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="shelf-shuffling-three shelf-shuffling" src="../../assets/images/chair-shuffling-three.png" alt="">
          </swiper-slide>

          <!-- Add Pagination -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </router-link>
    <!--goods three 曲木脚凳-->
    <router-link :to="{name:'stool'}">
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
            <img class="shelf-shuffling-one shelf-shuffling" src="../../assets/images/footstool-shuffing-one.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="shelf-shuffling-two shelf-shuffling" src="../../assets/images/footstool-shuffing-two.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="shelf-shuffling-three shelf-shuffling" src="../../assets/images/footstool-shuffing-three.png" alt="">
          </swiper-slide>

          <!-- Add Pagination -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </router-link>
    <!--footer-->
    <FxFooter></FxFooter>
  </div>
</template>

<script>
  import FxHeader from '@/components/block/FxHeader'
  import FxFooter from '@/components/block/FxFooter'
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
            el: '.swiper-pagination'
          }
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // }
        }
      }
    },
    components: {
      FxHeader,
      FxFooter
    },
    methods: {
    },
    created () {
      document.title = '或许'
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
      position: relative;
      .img-banner{
        width: 100%;
        height: 1180px;
        /*background-color: pink;*/
      }
      .banner-text--container{
        width: 100%;
        position: absolute;
        top: 0;
        .banner-text{
          font-size: 70px;
          font-weight: 500;
          color: rgba(255,255,255,1);
          transform: translateY(165px);
          line-height: 80px;
          letter-spacing: 8px;
        }
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
        height: 100%;
      }
    }
  }
</style>
