<template>
  <div class="main-wrapper">
    <!--header-->
    <FxHeader></FxHeader>
    <!--banner-->
    <div class="banner-container">
      <img class="team-banner" src="http://plbch8j6c.bkt.clouddn.com/team-banner.png">
      <div class="banner-text-container">
        <p class="banner-text--title">邂逅或许<br/>
          给幸福多一些设计感
        </p>
        <p class="banner-text--block">
          孜孜以求，<br/>
          一直用最人性化的设计，<br/>
          关心你我的日常生活，<br/>
          这才是最弥足珍贵的。
        </p>
      </div>
    </div>
    <div class="gray-block"></div>
    <!--核心成员-->
    <div class="core-members--container">
      <p class="core-members--title">核心成员</p>
      <p class="core-members-text">或许是一支跨国团队，由清华、剑桥、多位国际设计大师，以及多位才华横溢的来自品牌、制造、营销领域的经验丰富的专业人士组成。我们的愿景是通过产品，连接用户，与用户一起开启幸福感的家!</p>
      <div class="members-data--container">
        <ul class="members-data-block--top members-data--block">
          <li class="members-data">
            <img class="members-img" src="http://plbch8j6c.bkt.clouddn.com/people-zhou.png">
            <p class="members-name">李一舟</p>
            <p class="members-position">创始人/CEO</p>
          </li>
          <li class="members-data">
            <img class="members-img" src="http://plbch8j6c.bkt.clouddn.com/people-gong.png">
            <p class="members-name">宫平</p>
            <p class="members-position">联合创始人</p>
          </li>
          <li class="members-data">
            <img class="members-img" src="http://plbch8j6c.bkt.clouddn.com/people-hui.png">
            <p class="members-name">曾晖</p>
            <p class="members-position">产品总监/VP</p>
          </li>
        </ul>
        <ul class="members-data-block--buttom members-data--block">
          <li class="members-data">
            <img class="members-img" src="http://plbch8j6c.bkt.clouddn.com/people-hang.png">
            <p class="members-name">亢海生</p>
            <p class="members-position">供应链总监</p>
          </li>
          <li class="members-data">
            <img class="members-img" src="http://plbch8j6c.bkt.clouddn.com/people-li.png">
            <p class="members-name">李俊魁</p>
            <p class="members-position">设计总监/工业设计师</p>
          </li>
          <li class="members-data">
            <img class="members-img" src="http://plbch8j6c.bkt.clouddn.com/people-meng.png">
            <p class="members-name">刘蒙蒙</p>
            <p class="members-position">财务总监</p>
          </li>
        </ul>
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
    <FxFooter></FxFooter>
  </div>
</template>
<script>
  import FxHeader from '@/components/block/FxHeader'
  import FxFooter from '@/components/block/FxFooter'
  export default {
    name: 'perhapsTeam',
    data () {
      return {
        MembersData: [
          {rid: 's01', img: 'https://static.moebeast.com/static/img/avatar/yhh.jpg', portrait: 'https://static.moebeast.com/static/img/avatar/duxiaxia.jpg', name: '李一舟', position: '创始人/CEO'},
          {rid: 's02', img: 'https://static.moebeast.com/static/img/avatar/yhh.jpg', portrait: 'https://static.moebeast.com/static/img/avatar/duxiaxia.jpg', name: '宫平', position: '联合创始人'},
          {rid: 's03', img: 'https://static.moebeast.com/static/img/avatar/yhh.jpg', portrait: 'https://static.moebeast.com/static/img/avatar/duxiaxia.jpg', name: '曾晖', position: '产品总监/VP'},
          {rid: 's04', img: 'https://static.moebeast.com/static/img/avatar/yhh.jpg', portrait: 'https://static.moebeast.com/static/img/avatar/duxiaxia.jpg', name: '亢海生', position: '供应链总监'},
          {rid: 's05', img: 'https://static.moebeast.com/static/img/avatar/yhh.jpg', portrait: 'https://static.moebeast.com/static/img/avatar/duxiaxia.jpg', name: '李俊魁', position: '设计总监/工业设计师'},
          {rid: 's06', img: 'https://static.moebeast.com/static/img/avatar/yhh.jpg', portrait: 'https://static.moebeast.com/static/img/avatar/duxiaxia.jpg', name: '刘蒙蒙', position: '财务总监'}
        ]
      }
    },
    components: {
      FxHeader,
      FxFooter
    },
    methods: {

    },
    mounted () {
      this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
      })
    },
    created () {
      document.title = '或许 Team'
    }
  }
</script>
<style lang="scss" scoped>
  .main-wrapper{
    .banner-container{
      .team-banner{
        width: 100%;
        height: 100%;
      }
      .banner-text-container{
        padding: 110px 0 110px 50px;
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
    .gray-block{
      width: 100%;
      height:10px;
      background: rgba(244,244,244,1);
    }
    .core-members--container{
      margin: 100px 50px 0 50px;
      text-align: left;
      .core-members--title{
        font-size: 50px;
        font-weight: 500;
        color: rgba(18,57,50,1);
        line-height: 73px;
      }
      .core-members-text{
        font-size: 30px;
        font-weight: 400;
        color: rgba(18,57,50,1);
        line-height: 45px;
        opacity: 0.9;
        text-align: left;
        margin: 30px 0 50px;
      }
      .members-data--container{
        width: 100%;
        padding-bottom: 100px;
        .members-data--block{
          display: flex;
          justify-content: space-evenly;
          /* flex-direction: column; */
          text-align: center;
          align-items: center;
          .members-data{
            .members-img{
              width: 200px;
              height: 230px;
            }
            .members-name{
              font-size:29px;
              font-weight:500;
              color:rgba(18,57,50,1);
              margin-top: 13px;
            }
            .members-position{
              font-size:20px;
              font-weight:400;
              color:rgba(18,57,50,1);
              margin-top: 6px;
            }
          }
        }
        .members-data-block--buttom{
          margin-top: 45px;
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
            line-height: 36px;
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
            font-size: 24px;
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
