<template>
  <!--footer-->
  <div class="footer-container">
    <img src="../../assets/images/icon-footer-logo.png" class="icon-footer-logo">
    <div class="footer-diviMore--serviceder">
      <router-link :to="{name:'perhapsTeam'}"><p class="perhaps-team">或许团队</p></router-link>
      <router-link :to="{name:'businessCooperation'}"><p class="business-cooperation">商务合作</p></router-link>
      <p class="working-time">工作日9:30-18:30</p>
      <p class="phone-number">400-048-0806</p>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .footer-container{
    width: 100%;
    padding: 90px 0 120px;
    margin-top: -0.08rem;
    /*background-color: black;*/
    background: url("../../assets/images/bag-footer.png");
    background-size: 100% 100%;
    .icon-footer-logo{
      width: 25%;
      height: 100%;
    }
    .footer-diviMore--serviceder{
      width: 80%;
      border-top: 1px solid rgba(255,255,255,.3);
      margin: 30px auto 0;
      .perhaps-team{
        margin-top: 55px;
        font-size: 36px;
        font-weight: 500;
        color: rgba(255,255,255,1);
      }
      .business-cooperation{
        margin-top: 55px;
        font-size: 36px;
        font-weight: 500;
        color: rgba(255,255,255,1);
      }
      .working-time{
        margin-top: 55px;
        font-size: 29px;
        font-weight: 400;
        color: rgba(255,255,255,1);
        opacity: 0.7;
      }
      .phone-number{
        margin-top: 20px;
        font-size:44px;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
