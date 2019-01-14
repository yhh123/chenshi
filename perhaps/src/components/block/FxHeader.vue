<template>
  <div class="header-main">
    <!--导航-->
    <div class="header">
      <img src="../../assets/images/icon-menu.png" class="icon-menu" @click="showRuleModal = true">

      <router-link :to="{name:'perhapsIndax'}"><img src="../../assets/images/icon-logo.png" class="logo-img"></router-link>
    </div>
    <!-- 导航弹窗 -->
    <div class="fx-modal__wrapper" @touchmove.prevent v-if="showRuleModal">
      <div class="fx-mask" @touchmove.prevent></div>
      <div class="fx-modal fx-modal--rules">
        <div class="fx-modal__header">
          <img class="icon-close" src="../../assets/images/icon-off-btn.png" @click="showRuleModal = false">
          <img class="icon-logo-white" src="../../assets/images/icon-logo-white.png">
        </div>
        <div class="fx-modal__body">
          <div class="types-furniture--container">
            <p class="types-furniture--title">曲木家具</p>
            <div class="types-furniture--black">
              <router-link :to="{name:'linkShelf'}"><p>Link墙面曲木置物架</p></router-link>
              <router-link :to="{name:'rockingChair'}"><p>Hygge曲木摇椅</p></router-link>
              <router-link :to="{name:'stool'}"><p>Hygge曲木凳</p></router-link>
            </div>
          </div>
          <div class="perhaps-team--container">
            <p class="perhaps-team--title">或许Team</p>
            <div class="perhaps-team--black">
              <router-link :to="{name:'perhapsTeam'}"><p>团队介绍</p></router-link>
              <router-link :to="{name:'businessCooperation'}"><p>商务合作</p></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FxHeader',
    data () {
      return {
        showRuleModal: false // 游戏规则弹窗
      }
    },
    methods: {
    },
    created () {
    }
  }
</script>
<style lang="scss" scoped>
  .header-main{
    .header{
      height: 100px;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 50px 0 50px;
      .icon-menu{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 0;
      }
      .logo-img{
        width: 100px;
        height: 62px;
      }
    }
    /*弹窗*/
    .fx-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:rgba(27,27,27,1);
    }
    .fx-modal__wrapper {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: auto;
      margin: 0;
      z-index: 1000;
    }
    .fx-modal {
      position: relative;
      z-index: 100;

      .fx-modal__header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        .icon-close {
          width: 45px;
          height: 45px;
          position: absolute;
          left: 70px;
        }
        .icon-logo-white{
          width: 100px;
          height: 62px;
        }
      }

      .fx-modal__body {
        .types-furniture--container{
          width: 70%;
          margin: 100px auto 0;
          .types-furniture--title{
            font-size: 28px;
            font-weight: 600;
            color: rgba(255,255,255,1);
            opacity: 0.4;
            text-align: left;
            margin-bottom: 30px;
          }
          .types-furniture--black{
            border-top: 1px solid rgba(255,255,255,.3);
            border-bottom: 1px solid rgba(255,255,255,.3);
            padding-top: 45px;
            p{
              font-size: 38px;
              font-weight: 400;
              color: rgba(255,255,255,1);
              margin-bottom: 45px;
              text-align: left;
            }
          }
        }
        .perhaps-team--container{
          width: 70%;
          margin: 125px auto 0;
          .perhaps-team--title{
            font-size: 28px;
            font-weight: 600;
            color: rgba(255,255,255,1);
            opacity: 0.4;
            text-align: left;
            margin-bottom: 30px;
          }
          .perhaps-team--black{
            border-top: 1px solid rgba(255,255,255,.3);
            border-bottom: 1px solid rgba(255,255,255,.3);
            padding-top: 45px;
            p{
              font-size: 38px;
              font-weight: 400;
              color: rgba(255,255,255,1);
              margin-bottom: 45px;
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>
