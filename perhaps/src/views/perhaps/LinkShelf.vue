<template>
  <div class="main-wrapper">
    <!--header-->
    <FxHeader></FxHeader>
    <!--购买-->
    <div class="buy-container">
      <div class="buy-placeholder"></div>
      <div class="buy-block">
        <div class="buy">
          <p class="goods-name">Link墙面曲木置物架</p>
          <a href="https://youpin.mi.com/detail?gid=102235"><button class="buy-btn">购买</button></a>
        </div>
      </div>
    </div>
    <!--link 置物架轮播图-->
    <div class="link-shuffling--container">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img class="link-shuffling-one link-shuffling" src="http://plbch8j6c.bkt.clouddn.com/link-shuffling-one.png">
        </swiper-slide>
        <swiper-slide>
          <img class="link-shuffling-two link-shuffling" src="http://plbch8j6c.bkt.clouddn.com/link-shuffling-two.png">
        </swiper-slide>
        <swiper-slide>
          <img class="link-shuffling-three link-shuffling" src="http://plbch8j6c.bkt.clouddn.com/link-shuffling-three.png">
        </swiper-slide>
        <swiper-slide>
          <img class="link-shuffling-three link-shuffling" src="http://plbch8j6c.bkt.clouddn.com/link-shuffling-four.png">
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
          <p class="single-layer--title">单层</p>
          <img src="http://plbch8j6c.bkt.clouddn.com/category-single--layer.png" class="single-layer--img">
        </div>
        <div class="double--container">
          <p class="double--title">双层</p>
          <img src="http://plbch8j6c.bkt.clouddn.com/category-double.png" class="double--img">
        </div>
      </div>
    </div>
    <!--颜色-->
    <div class="good-color--container">
      <p class="good-color-title">颜色</p>
      <div class="color-container">
        <div class="ye-ecru--hook" @click="commodityColor('ye-ecru')">
          <img class="icon-color" src="../../assets/images/color-ye-ecru.png">
          <img :class="['icon-none', activeTab === 'ye-ecru' ? 'icon-hook' : '']" src="../../assets/images/icon-hook.png">
        </div>
        <div class="caramel-hook" @click="commodityColor('caramel')">
          <img class="icon-color" src="../../assets/images/color-caramel.png">
          <img :class="['icon-none', activeTab === 'caramel' ? 'icon-hook' : '']" src="../../assets/images/icon-hook.png">
        </div>
      </div>
      <div class="goods-img--container">
        <img v-if="activeTab === 'ye-ecru'" class="goods-img img--ye-ecru" src="http://plbch8j6c.bkt.clouddn.com/color-img--ye-ecru.png">
        <img v-if="activeTab === 'caramel'" class="goods-img img--caramel" src="http://plbch8j6c.bkt.clouddn.com/color-img--caramel.png">
      </div>
    </div>
    <div class="gray-block"></div>
    <!--商品详细介绍-->
    <div class="product-description--container">
      <div class="wall-container">
        <p class="product-title">一墙一世界  更多生活体验</p>
        <p class="product-text">幸福闪光的日子需要一份曲意感性。生活繁忙，居室拥挤，用优雅北欧原版设计装点墙面，根据不同居室空间需求，自由搭配出多种组合，让每个房间都多出一面墙的使用空间。</p>
      </div>
      <img src="http://plbch8j6c.bkt.clouddn.com/link-wall.png" class="link-wall">
      <div class="bent-wood--container wall-container">
        <p class="product-title">
          曲木压制工艺<br/>
          严苛流程支撑的好产品
        </p>
        <p class="product-text">天然桦木切削成薄板，层层叠放，经高温加热加压成型。这种工艺保证了各部位含水率及应力的均衡，使定型后的外形、尺寸更为稳定。2.56厘米的轻薄曲木条，可以承托30kg的重量。</p>
      </div>
      <img src="http://plbch8j6c.bkt.clouddn.com/link-bent-wood.png" class="bent-wood link-wall">
      <div class="strong-stable--container wall-container">
        <p class="product-title">
          坚固稳定<br/>
          安装方式也是设计
        </p>
        <p class="product-text">调节筒采用优质430不锈钢制造，坚固耐用；专业结构设计，经过27次结构设计和修正，可有效弥补打孔时出现的位置偏差。</p>
      </div>
      <img src="http://plbch8j6c.bkt.clouddn.com/link-strong-stable.png" class="bent-wood link-wall">
      <div class="many-scenarios--container wall-container">
        <p class="product-title">
          多场景使用<br/>
          墙面装饰的10001种可能
        </p>
        <p class="product-text">置物架没有固定的组装方式，完全在于不同居室的置物和墙面美化的创意。</p>
      </div>
      <img src="http://plbch8j6c.bkt.clouddn.com/link-many-one.png" class="link-many-one link-wall">
      <img src="http://plbch8j6c.bkt.clouddn.com/link-many-two.png" class="link-many-two link-wall">
      <img src="http://plbch8j6c.bkt.clouddn.com/link-many-three.png" class="link-many-three link-wall">
     </div>
    <!--footer-->
    <FxFooter></FxFooter>
  </div>
</template>
<script>
  import FxHeader from '@/components/block/FxHeader'
  import FxFooter from '@/components/block/FxFooter'
  export default {
    name: 'linkShelf',
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
        },

        activeTab: 'ye-ecru'
      }
    },
    components: {
      FxHeader,
      FxFooter
    },
    mounted () { // 给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)

      this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
      })
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
      },
      // 颜色分类
      commodityColor (tab) {
        this.activeTab = tab
      }
    },
    destroyed () { // 离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    },
    created () {
      document.title = 'Link墙面曲木置物架'
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
        z-index: 999;
        display: flex;
        align-items: center;
        .buy{
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 50px 0 50px;
          justify-content: space-between;
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
            font-size: 32px;
            font-weight: 500;
            color: rgba(255,255,255,1);
          }
        }
      }
    }

    .link-shuffling--container{
      .link-shuffling{
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
        margin: 0 30px 10px 20px;
        .single-layer--container{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 30px;
          .single-layer--title{
            width: 90px;
            height: 45px;
            background: rgba(48,103,93,1);
            font-size: 26px;
            font-weight: 400;
            line-height: 48px;
            color: rgba(255,255,255,1);
          }
          .single-layer--img{
            width: 70%;
            height: 100%;
            /*margin-left: 70px;*/
          }
        }
        .double--container{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 50px;
          .double--title{
            width: 90px;
            height: 45px;
            background:rgba(48,103,93,1);
            font-size: 26px;
            font-weight: 400;
            line-height: 48px;
            color: rgba(255,255,255,1);
          }
          .double--img{
            width: 70%;
            height: 100%;
            /*margin-left: 70px;*/
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
      .color-container{
        height: 70px;
        display: flex;
        margin-top: 35px;
        /*align-items: center;*/
        .ye-ecru--hook{
          .icon-color{
            width:68px;
            height:68px;
            position: absolute;
          }
          .icon-none{
            width:0;
            height:0;
            position: absolute;
          }
          .icon-hook{
            width: 50px !important;
            height: 50px !important;
            margin: 1.5% 1.5%;
            /*display: block;*/

          }
        }
        .caramel-hook{
          .icon-none{
            width:0;
            height:0;
            position: absolute;
            left: 140px;
          }
          .icon-color{
            width:68px;
            height:68px;
            position: absolute;
            left: 140px;
          }
          .icon-hook{
            width: 50px !important;
            height: 50px !important;
            margin: 1.5% 1.5%;
            /*display: block;*/
          }
        }
      }
      .goods-img--container{
        width: 100%;
        height: 300px;
        margin-bottom: 120px;
        background:rgba(244,244,244,1);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 0 20px;
        margin-top: 20px;
        .goods-img{
          width: 60%;
        }
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
