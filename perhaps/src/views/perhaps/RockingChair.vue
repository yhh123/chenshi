<template>
  <div class="main-wrapper">
    <!--header-->
    <FxHeader></FxHeader>
    <!--购买-->
    <div class="buy-container">
      <div class="buy-placeholder"></div>
      <div class="buy-block">
        <p class="goods-name">Hygge曲木摇椅</p>
        <button class="buy-btn">购买</button>
      </div>
    </div>
    <!--link 置物架轮播图-->
    <div class="rocking-chair--container">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img class="rocking-chair-one rocking-chair" src="../../assets/images/rocking-chair--one.png">
        </swiper-slide>
        <swiper-slide>
          <img class="rocking-chair-two rocking-chair" src="../../assets/images/rocking-chair--two.png">
        </swiper-slide>
        <swiper-slide>
          <img class="rocking-chair-three rocking-chair" src="../../assets/images/rocking-chair--three.png">
        </swiper-slide>
        <swiper-slide>
          <img class="rocking-chair-three rocking-chair" src="../../assets/images/rocking-chair--four.png">
        </swiper-slide>
        <!-- Add Pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--尺寸规格-->
    <div class="dimensions-container">
      <p class="dimensions-title">尺寸规格</p>
      <div class="dimensions-category">
        <div class="single-layer--container">
          <img src="../../assets/images/chair-dimensions.png" class="chair-dimensions">
        </div>
      </div>
    </div>
    <!--颜色-->
    <div class="good-color--container">
      <p class="good-color-title">颜色</p>
    </div>
    <div class="gray-block"></div>

    <!--商品详细介绍-->
    <div class="product-description--container">
      <div class="wall-container">
        <p class="product-title">陪伴一生的设计</p>
        <p class="product-text">北欧设计的内核就是：长久使用的美好之物。来自芬兰的设计师Tapio精心选材，用心设计，想创造一件能和时间做朋友的产品，一件记录岁月的幸福家具，一件你搬家时也不愿舍弃的心爱之物。</p>
      </div>
      <img src="../../assets/images/chair-company.png" class="link-wall">
      <div class="bent-wood--container wall-container">
        <p class="product-title">
          专利设计<br/>
          稳固舒适不变形
        </p>
        <p class="product-text">或许团队历时一年半研发，将实木弯曲做到了行业新高度：桦木薄片层层叠放，在严苛温控下，经定制模具加压，形成跨度超过70cm的超大曲木。该工艺使定型后的摇椅外形更为稳固。</p>
      </div>
      <img src="../../assets/images/chair-patent.png" class="bent-wood link-wall">
      <div class="strong-stable--container wall-container">
        <p class="product-title">
          简约轻盈的外形<br/>
          不惧重压的内核
        </p>
        <p class="product-text">不同于普通摇椅的拼木设计，Hygge摇椅采用完整的实木扶手圈，尽显简约之美。2.5cm厚的曲木条搭建成三角形的闭合扶手圈，保证了有效的力学结构，让不到10kg的摇椅框架可承重110kg。</p>
      </div>
      <img src="../../assets/images/chair-kernel.png" class="bent-wood link-wall">
      <div class="many-scenarios--container wall-container">
        <p class="product-title" style="font-family:微软雅黑;">
          找到 “家” 的101种幸福
        </p>
        <p class="product-text">Hygge摇椅制作的初心，是让不同年龄的人，躺下来，仿佛回到家。有Hygge的地方，就是家。</p>
      </div>
      <img src="../../assets/images/chair-scenario--one.png" class="link-many-one link-wall">
      <img src="../../assets/images/chair-scenario--two.png" class="link-many-two link-wall">
      <img src="../../assets/images/chair-scenario--three.png" class="link-many-three link-wall">
    </div>
    <!--footer-->
    <FxFooter></FxFooter>
  </div>
</template>
<script>
  import FxHeader from '@/components/block/FxHeader'
  import FxFooter from '@/components/block/FxFooter'
  export default {
    name: 'rockingChair',
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
    mounted () { // 给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () { // 改变元素#searchBar的top值
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('.buy-block').offsetTop

        if (scrollTop <= 110) {
          offsetTop = 50 - Number(scrollTop)
          document.querySelector('.buy-block').style.top = offsetTop + 'px'
        } else {
          document.querySelector('.buy-block').style.top = '0px'
        }
      }
    },
    destroyed () { // 离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    },
    created () {
      document.title = 'Hygge曲木摇椅'
    }
  }
</script>
<style lang="scss" scoped>
  .main-wrapper{
    /*购买 container*/
    .buy-container{
      height: 100px;
      position: relative;
      .buy-placeholder{
        width: 100%;
        height: 100px;
        position: absolute;
        top: 0;
      }
      .buy-block{
        position: fixed;
        width: 100%;
        height:100px;
        background: rgba(255,255,255,.9);
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 999;
        .goods-name{
          font-size: 40px;
          font-weight: 400;
          color: rgba(18,57,50,1);
        }
        .buy-btn{
          width: 130px;
          height: 68px;
          background: rgba(48,103,93,1);
          border-radius: 4px;
          font-size: 22px;
          font-weight: 500;
          color: rgba(255,255,255,1);
        }
      }
    }

    .rocking-chair--container{
      .rocking-chair{
        width: 100%;
        height: 100%;
      }
    }
    .dimensions-container{
      margin: 110px 50px 0 50px;
      .dimensions-title{
        font-size: 55px;
        font-weight: 500;
        color: rgba(18,57,50,1);
        border-bottom: 3px solid rgba(0,0,0,.2);
        padding-bottom: 10px;
        text-align: left;
      }
      .dimensions-category{
        margin: 0 40px 0 30px;
        .single-layer--container{
          .chair-dimensions{
            width: 100%;
            height: 100%;
            margin-top: 60px;
          }
        }
      }
    }

    .good-color--container {
      margin: 110px 50px 0 50px;
      .good-color-title {
        font-size: 55px;
        font-weight: 500;
        color: rgba(18, 57, 50, 1);
        border-bottom: 3px solid rgba(0, 0, 0, .2);
        padding-bottom: 10px;
        text-align: left;
      }
    }
    .gray-block {
      width: 100%;
      height: 10px;
      background: rgba(244,244,244,1);
    }

    .product-description--container{
      .wall-container{
        margin: 100px 50px 0 50px;
        .product-title{
          font-size: 55px;
          font-weight: 500;
          color: rgba(18, 57, 50, 1);
          text-align: left;
          line-height: 75px;
        }
        .product-text{
          font-size: 29px;
          font-weight: 400;
          color: rgba(18,57,50,.9);
          line-height: 40px;
          text-align: left;
          margin: 27px 0 47px;
        }
      }
      .link-wall{
        width: 100%;
        height: 100%;
      }
      .link-many-two{
        margin: 10px 0;
      }
    }
  }
</style>
