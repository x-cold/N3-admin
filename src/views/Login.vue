<template>
  <section class="login-wrap">
    <n3-form ref='form' class="login-form">
      <h3>系统登录</h3>
      <div class="fields">
        <n3-input class="field" v-model="account" placeholder="账号" width="320px">
        </n3-input>
        <n3-input class="field" v-model="password" type="password" placeholder="密码" width="320px">
        </n3-input>
        <n3-checkbox-group v-model="remember" class="save-account">
          <n3-checkbox label="remember">记住账号</n3-checkbox>
        </n3-checkbox-group>
      </div>
      <div class="submit">
        <n3-button @click.native="submit" type="primary" :loading="loading" block>{{ loading ? '登录中' : '登录' }}</n3-button>
      </div>
    </n3-form>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        account: '',
        password: '',
        remember: [],
        loading: false
      }
    },
    methods: {
      submit () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$router.push('用户列表')
        }, 3000)
      }
    }
  }
</script>

<style lang="less">
  .login-wrap {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: url(http://pic.58pic.com/58pic/17/21/43/89W58PICUCK_1024.jpg) 25% 25% no-repeat;
    background-size: cover;
  }
  
  .login-form {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 12px 20px;
    width: 360px;
    height: 260px;
    font-size: 14px;
    background: #fff;
    border: 1px solid #8492a6;
    border-radius: 12px;
    opacity: .75;
    h3 {
      padding: 12px 0;
      font-weight: bold;
      font-size: 22px;
      text-align: center;
    }
    .field {
      display: block;
      margin: 0 auto;
      padding: 6px 0;
    }
    .submit {
      padding: 12px 0;
    }
  }
</style>
