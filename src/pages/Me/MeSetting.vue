<template>
  <div class="me-setting">
    <div>
      <me-common-cell left-icon="itlike-3" left-title="免密支付设置"/>
      <me-common-cell left-icon="itlike-2" left-title="免拼卡设置"/>
      <me-common-cell left-icon="itlike-1" left-title="消息接收设置" right-title="接收" right-title-color="red"/>
    </div>

    <div style="margin-top: 10px">
      <me-common-cell left-icon="itlike-4" left-title="免密支付设置" :clickCell="dealClickCell"/>
      <me-common-cell left-icon="itlike-5" left-title="itlike设置" :clickCell="dealClickCell"/>
    </div>

    <div style="margin-top: 10px">
      <me-common-cell left-icon="itlike-1" left-title="免密支付设置"/>
    </div>

    <div class="logout" @click="dealLogout">退出登录</div>
  </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell';
  import {Toast, MessageBox} from 'mint-ui';
  import {mapActions} from 'vuex'

  export default {
    name: "MeSetting",
    components: {
      MeCommonCell
    },
    methods: {
      ...mapActions(["logout"]),
      dealClickCell(props) {
        Toast('点击了' + props);
      },
      dealLogout() {
        // console.error(111);
        MessageBox.confirm('您确定退出吗?').then(action => {
          // console.log(action);
          if ('confirm' === action) {
            // this.logout({});
            // 回到主界面
            this.$router.replace('/home');
          }
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-setting
    width 100%
    height 100%
    background-color #ececec
    .logout
      height 40px
      line-height 40px
      background-color #fff
      margin-top 20px
      text-align center
</style>
