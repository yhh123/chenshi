<template>
  <div class="main-wrapper">
    <p class="title">登录</p>
    <!--tab切换-->
    <div class="tab-btn">
      <div @click="handleFriendTab('passwordLogin')" :class="['tab', activeTab === 'passwordLogin' ? 'active' : '']">
        <p class="passwordLogin-text">密码登录</p>
      </div>
      <p class="vertical-line"></p>
      <div @click="handleFriendTab('dynamicLogin')" :class="['tab', activeTab === 'dynamicLogin' ? 'active' : '']">
        <p>动态码登录</p>
      </div>
    </div>
    <!--密码登录-->
    <div class="passwordLogin-container" v-if="activeTab === 'passwordLogin'">
      <div class="input-container">
        <div class="phone--area-code">
          <select class="area-code" @focus="handleIsInput">
            <option value ="volvo">+86</option>
            <option value ="saab">+87</option>
            <option value="opel">+89888</option>
            <option value="audi">+89</option>
          </select>
          <img v-if="isShowDropdDown" src="../../assets/images/invitefriends/icon-drop-down.png" class="drop-down">
          <input type="text" class="input-phone-number" placeholder="请输入手机号码">
        </div>
        <div class="password-contaienr">
          <input class="input-password" type="text" v-if="pwdType" v-model="eyetxt">
          <input class="input-password" type="password" placeholder="请输入密码" v-model="eyetxt" v-else >
          <img :src="seen ? seenImg : unseenImg" @click="changeType()" class="eye_img" />
        </div>
        <p class="forget-btn">忘记密码?</p>
      </div>
      <button class="landing-btn">登录</button>
      <p class="registered-container">还没有账号？<span class="registered-btn">点击注册</span></p>
      <div class="footer-login">
        <div class="third-party--login">
          <p class="third-party--text"><span class="gray-line"></span><span class="text">第三方登录</span><span class="gray-line"></span></p>
          <img class="wechat-img" src="../../assets/images/invitefriends/icon-wechat.png">
        </div>
      </div>
    </div>
    <!--验证码登录-->
    <div class="dynamicLogin-container" v-if="activeTab === 'dynamicLogin'">
      <div class="input-container">
        <div class="phone--area-code">
          <select class="area-code" @focus="handleIsInput">
            <option value ="volvo">+86</option>
            <option value ="saab">+87</option>
            <option value="opel">+89888</option>
            <option value="audi">+89</option>
          </select>
          <img v-if="isShowDropdDown" src="../../assets/images/invitefriends/icon-drop-down.png" class="drop-down">
          <input type="text" class="input-phone-number" placeholder="请输入手机号码">
        </div>
        <div class="dynamic--verification-code">
          <input class="verification-code--text" type="text" placeholder="请输入手机动态码">
          <p class="verification-code-btn">获取动态码</p>
        </div>
        <p class="forget-btn">忘记密码?</p>
      </div>
      <button class="landing-btn">登录</button>
      <div class="footer-login">
        <div class="third-party--login">
          <p class="third-party--text"><span class="gray-line"></span><span class="text">第三方登录</span><span class="gray-line"></span></p>
          <img class="wechat-img" src="../../assets/images/invitefriends/icon-wechat.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import api from '@/constant/api'
export default {
  name: 'landing',
  data () {
    return {
      isShowDropdDown: true,
      activeTab: 'passwordLogin',
      seen: '',
      unseenImg: 'https://static.moebeast.com/icon-unseen.png', // 看不见
      seenImg: 'https://static.moebeast.com/icon-seen.png', // 看得见密码
      eyetxt: '',
      pwdType: false // 此时文本框隐藏，显示密码框
    }
  },
  methods: {

    handleIsInput () {
      this.isShowDropdDown = false
    },

    // 密码登录和动态码登录分类
    handleFriendTab (tab) {
      this.activeTab = tab
    },
    // 密码的显示隐藏
    changeType () {
      this.seen = !this.seen // 小眼睛的变化
      this.pwdType = !this.pwdType // 跟着小眼睛变化，密码框隐藏显示文本框，内容就显示了
    }
  },
  created () {
    document.title = '登录'
  }
}
</script>

<style lang="scss" scoped>
  .main-wrapper{
    .title{
      font-size: 60px;
      font-weight: 600;
      color: rgba(51,51,51,1);
      line-height: 60px;
      transform: translateY(40px);
      margin-left: 40px;
    }
    .tab-btn{
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      margin: 70px 0 0;
      .vertical-line{
        width: 3px;
        height:24px;
        background:#999999;
      }
      div{
        p {
          height: 100px;
          font-size: 32px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 100px;
          text-align: center;
          padding: 0 40px;
        }
        &.active {
          p {
            color: #5fe4b1;
          }
        }
      }
    }
    .passwordLogin-container{
      margin: 0 40px;
      .input-container{
        margin-top: 20px;
        .phone--area-code{
          padding: 18px 0;
          border-bottom: 1px solid #DADADA;
          display: flex;
          align-items: center;
          position: relative;
          .area-code{
            width: 120px;
            height: 36px;
            font-size:32px;
            font-weight:500;
            color:rgba(51,51,51,1);
            border: 0;
            line-height: 40px;
            background: transparent;
            position: relative;
          }
          .drop-down{
            width:24px;
            height:24px;
            position: absolute;
            left: 80px;
            top: 30px;
            z-index: 0;
          }
          .input-phone-number{
            font-size: 36px;
            font-weight: 500;
            border: 0;
            text-indent: 20px;
          }
        }
        .password-contaienr{
          padding: 20px 0;
          border-bottom: 1px solid #DADADA;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .input-password{
            width: 100%;
            font-size: 36px;
            font-weight: 500;
            margin-top: 60px;
            border: 0;
          }
          .eye_img{
            width:40px;
            height:40px;
            transform: translateY(30px);
          }
        }
        .forget-btn{
          font-size: 24px;
          font-weight: 400;
          color: rgba(102,102,102,1);
          line-height: 24px;
          display: flex;
          flex-direction: row-reverse;
          margin-top: 30px;
        }
      }
      .landing-btn{
        width: 100%;
        height: 90px;
        background: rgba(95,228,177,1);
        box-shadow: 0 20px 50px 0 rgba(95,228,177,0.38);
        border-radius:8px;
        font-size: 32px;
        font-weight: 600;
        color: rgba(255,255,255,1);
        padding: 20px 0;
        margin-top: 60px;
      }
      .registered-container{
        font-size: 28px;
        font-weight: 500;
        color: rgba(51,51,51,1);
        line-height: 28px;
        display: flex;
        justify-content: center;
        margin-top: 60px;
        .registered-btn{
          color: #5FE4B1;
        }
      }
      .footer-login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .third-party--login{
          position: absolute;
          bottom: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .third-party--text{
            display: flex;
            align-items: center;
            span{
              display: inline-block;
            }
            .gray-line{
              width: 200px;
              height: 2px;
              background: rgba(233,233,233,1);
            }
            .text{
              font-size: 24px;
              font-weight: 500;
              color: rgba(102,102,102,1);
              line-height: 20px;
              margin: 0 20px;
            }
          }
          .wechat-img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            transform: translateY(30px);
          }
        }
      }
    }
    .dynamicLogin-container{
      margin: 0 40px;
      .input-container{
        margin-top: 20px;
        .phone--area-code{
          padding: 18px 0;
          border-bottom: 1px solid #DADADA;
          display: flex;
          align-items: center;
          position: relative;
          .area-code{
            width: 120px;
            height: 36px;
            font-size:32px;
            font-weight:500;
            color:rgba(51,51,51,1);
            border: 0;
            line-height: 40px;
            background: transparent;
            position: relative;
          }
          .drop-down{
            width:24px;
            height:24px;
            position: absolute;
            left: 80px;
            top: 30px;
            z-index: 0;
          }
          .input-phone-number{
            font-size: 36px;
            font-weight: 500;
            border: 0;
            text-indent: 20px;
          }
        }
        .dynamic--verification-code{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid #DADADA;
          .verification-code--text{
            font-size: 36px;
            font-weight: 500;
            margin-top: 60px;
            border: 0;
          }
          .verification-code-btn{
            font-size: 32px;
            font-weight: 400;
            color: rgba(51,51,51,1);
            transform: translateY(30px);
          }
        }
        .forget-btn{
          font-size: 24px;
          font-weight: 400;
          color: rgba(102,102,102,1);
          line-height: 24px;
          display: flex;
          flex-direction: row-reverse;
          margin-top: 30px;
        }
      }
      .landing-btn{
        width: 100%;
        height: 90px;
        background: rgba(95,228,177,1);
        box-shadow: 0 20px 50px 0 rgba(95,228,177,0.38);
        border-radius:8px;
        font-size: 32px;
        font-weight: 600;
        color: rgba(255,255,255,1);
        padding: 20px 0;
        margin-top: 60px;
      }
      .footer-login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .third-party--login{
          position: absolute;
          bottom: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .third-party--text{
            display: flex;
            align-items: center;
            span{
              display: inline-block;
            }
            .gray-line{
              width: 200px;
              height: 2px;
              background: rgba(233,233,233,1);
            }
            .text{
              font-size: 24px;
              font-weight: 500;
              color: rgba(102,102,102,1);
              line-height: 20px;
              margin: 0 20px;
            }
          }
          .wechat-img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            transform: translateY(30px);
          }
        }
      }
    }
  }
  ::-moz-placeholder { color:#DDDDDD; background-color:white; line-height: 45px;}
  ::-webkit-input-placeholder { color:#DDDDDD; background-color:white; line-height: 45px;}
  :-ms-input-placeholder { color:#DDDDDD; background-color:white; line-height: 45px;}
  select {
    /*Chrome同Firefox与IE里面的右侧三角显示的样式不同*/
    border: solid 1px #ddd;
    /*将默认的select选择框样式清除*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    padding-right: 14px;
    /*如果要加入自定义图片， 就增加这个属性 background: url或者在html中直接加入图标也行*/
  }
  /*清除iIE的默认选择框样式*/
  select::-ms-expand { display: none; }

  input{
    background:none;
    outline:none;
    border:0px;
  }
</style>
