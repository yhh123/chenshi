<template>
  <div class="main-wrapper">
    <!--header-->
    <FxHeader></FxHeader>
    <!--购买-->
    <div class="buy-container">
      <div class="buy-placeholder"></div>
      <div class="buy-block">
        <div class="buy">
          <p class="goods-name">Hygge曲木凳</p>
          <a href="https://h5.youzan.com/v2/feature/EEWl5a9u67"><button class="buy-btn">购买</button></a>
        </div>
      </div>
    </div>
    <!--link 置物架轮播图-->
    <div class="rocking-chair--container">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img class="rocking-chair-one rocking-chair" src="http://plbch8j6c.bkt.clouddn.com/stool-shuffling--one.png">
        </swiper-slide>
        <swiper-slide>
          <img class="rocking-chair-two rocking-chair" src="http://plbch8j6c.bkt.clouddn.com/stool-shuffling--two.png">
        </swiper-slide>
        <swiper-slide>
          <img class="rocking-chair-three rocking-chair" src="http://plbch8j6c.bkt.clouddn.com/stool-shuffling--three.png">
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
          <img src="http://plbch8j6c.bkt.clouddn.com/stool-size.png" class="chair-dimensions">
        </div>
      </div>
    </div>
    <!--颜色-->
    <div class="good-color--container">
      <p class="good-color-title">颜色</p>
      <div class="color-container">
        <div class="color-container--framework">
          <p class="framework-color">框架</p>
          <div class="ye-ecru--hook" @click="commodityColor('ye-ecru')">
            <img class="icon-color" src="../../assets/images/color-ye-ecru.png">
            <img :class="['icon-none', activeTab === 'ye-ecru' ? 'icon-hook' : '']" src="../../assets/images/icon-hook.png">
          </div>
          <div class="caramel-hook" @click="commodityColor('caramel')">
            <img class="icon-color" src="../../assets/images/color-caramel.png">
            <img :class="['icon-none', activeTab === 'caramel' ? 'icon-hook' : '']" src="../../assets/images/icon-hook.png">
          </div>
        </div>
        <div class="color--chair-cushion">
          <p class="chair-cushion">椅垫</p>
          <div v-if="activeTab !== 'caramel'" class="desert-dust--hook" @click="cushionColor('desert-dust')">
            <img class="icon-color" src="../../assets/images/color-desert-dust.png">
            <img :class="['icon-none', cushionTab === 'desert-dust' ? 'icon-hook' : '']" src="../../assets/images/icon-hook.png">
          </div>
          <div v-if="activeTab === 'caramel'" class="desert-dust--no">
            <img class="icon-color" src="../../assets/images/desert-dust--no.png">
          </div>
          <div class="peacock-blue-hook" @click="cushionColor('peacock-blue')">
            <img class="icon-color" src="../../assets/images/color-peacock-blue.png">
            <img :class="['icon-none', cushionTab === 'peacock-blue' ? 'icon-hook' : '']" src="../../assets/images/icon-hook.png">
          </div>
          <div v-if="activeTab !== 'ye-ecru'" class="mber-black" @click="cushionColor('mber-black')">
            <img class="icon-color" src="../../assets/images/color-mber-black.png">
            <img :class="['icon-none', cushionTab === 'mber-black' ? 'icon-hook' : '']" src="../../assets/images/icon-hook.png">
          </div>
          <div v-if="activeTab === 'ye-ecru'" class="amber-black--no">
            <img class="icon-color" src="../../assets/images/amber-black--no.png">
          </div>
        </div>
      </div>
      <div class="goods-img--container">
        <img v-if="activeTab === 'ye-ecru' && cushionTab === 'desert-dust' || activeTab === 'ye-ecru' && cushionTab === 'mber-black'" class="goods-img color-img-ash-ye" src="http://plbch8j6c.bkt.clouddn.com/stool-img-ash-ye.png">
        <img v-if="activeTab === 'ye-ecru' && cushionTab === 'peacock-blue'" class="goods-img color-img-blue-ye" src="http://plbch8j6c.bkt.clouddn.com/stool-img-blue-ye.png">
        <img v-if="activeTab === 'caramel' && cushionTab === 'peacock-blue' || activeTab === 'caramel' && cushionTab === 'desert-dust'" class="goods-img color-img-caramel-blue" src="http://plbch8j6c.bkt.clouddn.com/stool-img-caramel-blue.png">
        <img v-if="cushionTab === 'mber-black' && activeTab === 'caramel'" class="goods-img color-img-caramel-black" src="http://plbch8j6c.bkt.clouddn.com/stool-img-caramel-black.png">
      </div>
    </div>
    <div class="gray-block"></div>

    <!--商品详细介绍-->
    <div class="product-description--container">
      <div class="wall-container">
        <p class="product-title">
          幸福家居伊始<br/>
          改变轻松一整个家
        </p>
        <p class="product-text">当我们开始改变自己的生活，即使是像增添一把凳子，换一把椅子这种小确幸，都很有意义。小而美的曲木凳，经过精心雕琢，让设计感和坐感更为讲究，恰到好处的大小，点亮每一个家居场所。</p>
      </div>
      <img src="http://plbch8j6c.bkt.clouddn.com/stool-happiness.png" class="link-wall">
      <div class="bent-wood--container wall-container">
        <p class="product-title">
          人机工学结构
        </p>
        <p class="product-text">蹬腿与垂直地面方向夹角5°，微微外扩，既保证了外形的美观，又增加了凳子自身的承重。符合人体工学的C形曲线，与椅腿构成飞檐式曲线，营造多维流畅线条，给予臀部舒适的支撑。</p>
      </div>
      <img src="http://plbch8j6c.bkt.clouddn.com/stool-people--work.png" class="bent-wood link-wall">
      <div class="strong-stable--container wall-container">
        <p class="product-title">
          一凳多用  实用美学
        </p>
        <p class="product-text">家里的沙发、座椅已经是老面孔了，不舍得更换，但新鲜感渐失，配合使用小脚凳，突如其来的舒适，欣喜仿若初见。</p>
      </div>
      <img src="http://plbch8j6c.bkt.clouddn.com/stool-scenario--one.png" class="link-many-one link-wall">
      <img src="http://plbch8j6c.bkt.clouddn.com/stool-scenario--two.png" class="link-many-two link-wall">
      <img src="http://plbch8j6c.bkt.clouddn.com/stool-scenario--three.png" class="link-many-three link-wall">
    </div>
    <!--footer-->
    <FxFooter></FxFooter>
  </div>
</template>
<script>
  import FxHeader from '@/components/block/FxHeader'
  import FxFooter from '@/components/block/FxFooter'
  export default {
    name: 'stool',
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

        activeTab: 'ye-ecru',
        cushionTab: 'peacock-blue'
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
      },
      // 颜色分类
      commodityColor (tab) {
        this.activeTab = tab
        // this.cushionTab = tab
      },
      cushionColor (tab) {
        this.cushionTab = tab
      }
    },
    destroyed () { // 离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    },
    created () {
      document.title = 'Hygge曲木凳'
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
            width: 80%;
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
      .color-container{
        .color-container--framework{
          height: 70px;
          display: flex;
          margin-top: 35px;
          /*align-items: center;*/
          .framework-color{
            font-size:36px;
            font-weight:400;
            color:rgba(56,56,56,1);
            margin-right: 30px;
            line-height: 70px;
          }
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
              left: 240px;
            }
            .icon-color{
              width:68px;
              height:68px;
              position: absolute;
              left: 240px;
            }
            .icon-hook{
              width: 50px !important;
              height: 50px !important;
              margin: 1.5% 1.5%;
              /*display: block;*/
            }
          }
        }
        .color--chair-cushion{
          height: 70px;
          display: flex;
          margin-top: 35px;
          /*align-items: center;*/
          .chair-cushion{
            font-size:36px;
            font-weight:400;
            color:rgba(56,56,56,1);
            margin-right: 30px;
            line-height: 70px;
          }
          .desert-dust--hook{
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
          .desert-dust--no{
            .icon-color{
              width:68px;
              height:68px;
              position: absolute;
            }
          }

          .peacock-blue-hook{
            .icon-none{
              width:0;
              height:0;
              position: absolute;
              left: 240px;
            }
            .icon-color{
              width:68px;
              height:68px;
              position: absolute;
              left: 240px;
            }
            .icon-hook{
              width: 50px !important;
              height: 50px !important;
              margin: 1.5% 1.5%;
              /*display: block;*/
            }
          }
          .mber-black{
            .icon-none{
              width:0;
              height:0;
              position: absolute;
              left: 328px;
            }
            .icon-color{
              width:68px;
              height:68px;
              position: absolute;
              left: 328px;
            }
            .icon-hook{
              width: 50px !important;
              height: 50px !important;
              margin: 1.5% 1.5%;
              /*display: block;*/
            }
          }
          .amber-black--no{
            .icon-none{
              width:0;
              height:0;
              position: absolute;
              left: 328px;
            }
            .icon-color{
              width:68px;
              height:68px;
              position: absolute;
              left: 328px;
            }
          }
        }
      }
      .goods-img--container{
        width: 100%;
        /*height: 300px;*/
        margin-bottom: 120px;
        background:rgba(244,244,244,1);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 0 60px;
        margin-top: 20px;
        .goods-img{
          /*width: 65%;*/
          width: 346px;
          height: 390px;
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
          color: rgba(18, 57, 50,1);
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
