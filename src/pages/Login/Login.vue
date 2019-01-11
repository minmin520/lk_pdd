<template>
      <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <div class="login-logo">
          <img src="./images/lk_logo_sm.png" alt="" width="250">
        </div>
        <!--面板标题-->
        <div class="login-header-title">
          <a href="javascript:;" :class="{current: loginMode}" @click="dealLoginMode(true)">短信登录</a>
          <a href="javascript:;" :class="{current: !loginMode}" @click="dealLoginMode(false)">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <div class="form-container">
          <!--手机验证码登录部分-->
          <div :class="{current: loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button class="get-verification"
                      v-if="!countDown"
                      :class="{count_down_number:countDownNumber}"
                      @click.prevent="getVerifyCode()">获取验证码
              </button>
              <button disabled="disabled" class="get-verification" v-else>已发送({{countDown}}s)</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div :class="{current: !loginMode}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名/手机/邮箱" v-model="name">
              </section>
              <section class="login-verification">
                <input type="password" placeholder="密码" v-model="pwd" v-if="pwdMode">
                <input type="text" placeholder="密码" v-model="pwd" v-else>
                <div class="switch-show">
                  <img @click="dealPwdMode(false)" :class="{on: pwdMode}" src="./images/hide_pwd.png" alt="" width="20">
                  <img @click="dealPwdMode(true)" :class="{on: !pwdMode}" src="./images/show_pwd.png" alt="" width="20">
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img 
                    ref="captcha" 
                    class="get-verification" 
                    src="http://127.0.0.1:3000/api/captcha" 
                    alt="captcha" 
                    @click.prevent="getCaptchaCode()"/>
              </section>
            </section>
          </div>
          <button class="login-submit" @click.prevent="login()">登录</button>
        </div>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
import {getPhoneCode, phoneCodeLogin, pwdLogin} from '../../api/index'
import { Toast } from 'mint-ui';
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data() {
        return {
            loginMode: true, // 登录方式， true验证码登录， false密码登录
            phone: '', // 手机号码
            countDown: 0,  // 倒计时
            pwdMode: false, // 明文密文
            pwd: '', // 密码
            name: '', // 用户名
            captcha: '', // 图像验证码
            code: '', // 手机验证码
            userInfo: {}
        }
    },
    methods: {
        ...mapActions(['syncUserInfo']),
        // 1、登录的模式
        dealLoginMode(flag) {
            this.loginMode = flag;
        },
        // 2、获取验证码
        async getVerifyCode() {
            // 2.1、开启倒计时
            if (this.countDownNumber) {
                this.countDown = 10;
                this.intervaild = setInterval(()=>{
                    this.countDown --;
                    // 判断
                    if (this.countDown === 0) {
                        clearInterval(this.intervaild);
                    }
                }, 1000);
            }
            // 2.2获取短信验证码
            let result = await getPhoneCode(this.phone);
            console.log(result);
            if (result.error_code === 0) {
                Toast({
                    message: result.message,
                    position: 'center',
                    duration: 3000
                });
            }

        },
        // 3、密码明文结合秘文
        dealPwdMode(flag) {
            this.pwdMode = flag;
        },
        // 4、获取图形验证码
        getCaptchaCode() {
            this.$refs.captcha.src="http://127.0.0.1:3000/api/captcha?time="+new Date();
        },
        async login() {
            // 5.1登录模式
            if(this.loginMode) { // 验证码登录
                // 5.2 前台校验
                if (!this.phone) {
                    this.$toast('请输入手机号码');
                    return;
                } else if (!this.countDownNumber){
                    this.$toast('请输入正确的手机号码');
                    return;
                }

                if (!this.code) {
                    this.$toast('请输入验证码');
                    return;
                } else if (!(/^[0-9]{6}$/.test(this.code))){
                    this.$toast('请输入正确的验证码');
                    return;
                }
                // 5.3 --手机验证码登录
                const result = await phoneCodeLogin(this.phone, this.code);
                this.userInfo = result.message;
                if (result.success_code == 200) {
                    this.userInfo = result.message;
                } else {
                    this.userInfo = {
                        message: '登录失败，手机号或验证码不正确'
                    }
                }
            } else { // 账户密码登录
                // 5.4 前端校验
                if (!this.name) {
                    this.$toast('请输入用户名/手机/邮箱');
                    return;
                } else if (!this.pwd){
                    this.$toast('请输入密码');
                    return;
                } else if (!this.captcha){
                    this.$toast('请输入验证码');
                    return;
                }
                // 5.5 用户名和密码的登录
                const result = await pwdLogin(this.name, this.pwd, this.captcha);
                console.log('账户密码登录1', result);
                if (result.success_code == 200) {
                    this.userInfo = result.message;
                } else {
                    this.userInfo = {
                        message: '登录失败，手机号或验证码不正确'
                    }
                }
            }
            // 6、后续处理
            if (!this.userInfo.id) { // 失败
                this.$toast(this.userInfo.message);
            } else { // 成功
                this.$toast('登录成功');
                this.syncUserInfo(this.userInfo);
                this.$router.back();
            }
        }
    },
    computed: {
        // 验证手机号码
        countDownNumber() {
            return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
        }
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login-container
    width 100%
    height 100%
    background #f5f5f5
    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto
      .login-header
        .login-logo
          font-size 40px
          font-weight bold
          color mediumpurple
          text-align center
        .login-header-title
          padding-top 40px
          padding-bottom 10px
          text-align center
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.current
              color mediumpurple
              font-weight 700
              border-bottom 2px solid mediumpurple
      .login-content
        > .form-container
          > div
            display none
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left 8px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid mediumpurple
            .login-message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get-verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.count_down_number
                  color purple
            .login-verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch-show
                position absolute
                right 10px
                top 12px
                img
                  display none
                img.on
                  display block
            .login-hint
              margin-top 12px
              color #999
              font-size 12px
              line-height 20px
              > a
                color mediumpurple
          .login-submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background mediumpurple
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .login-back
          display block
          width 100%
          height 42px
          margin-top 15px
          border-radius 4px
          background transparent
          border: 1px solid mediumpurple
          color mediumpurple
          text-align center
          font-size 16px
          line-height 42px
</style>


