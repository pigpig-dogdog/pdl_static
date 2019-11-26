<template>
  <div>
    <div class="login-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        class="login-form"
        autocomplete="on"
        label-position="left">
        <div class="title-container">
          <h3 class="title">深度学习平台</h3>
        </div>
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user"/>
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>
        <el-tooltip v-model="capsTooltip" content="大写模式已开启" placement="right" manual>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password"/>
            </span>
            <el-input
              ref="password"
              :key="passwordType"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
            </span>
          </el-form-item>
        </el-tooltip>
        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;margin-bottom:30px;margin-top:5px;"
          @click.native.prevent="handleLogin()">
          登录
        </el-button>
        <div class="go-right">
          <span class="noAccount">没有账号？</span>
          <span class="register" @click="registerDialog = true"><u>马上注册</u></span>
        </div>
      </el-form>
    </div>
    <el-dialog title="注册" :visible.sync="registerDialog" width=25% center>
      <el-form :model="registerForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="registerForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
           <el-input v-model="registerForm.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth">
           <el-input v-model="confirmPassword" autocomplete="off" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleRegister()">注册账号</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getUsername } from '@/utils/user';
export default {
  name: 'LoginPage',
  data () {
    return {
      loginForm: {
        username: getUsername(),
        password: ''
      },
      registerForm: {
        username: '',
        password: ''
      },
      confirmPassword: '',
      formLabelWidth: '100px',
      registerDialog: false,
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false
    };
  },
  mounted () {
    if (!this.loginForm.username) {
      this.$refs.username.focus(); // focus
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus();
    }
  },
  methods: {
    checkCapslock ({shiftKey, key} = {}) {
      if (key && key.length === 1) {
        this.capsTooltip = !!(shiftKey & (key >= 'a' && key <= 'z') | !shiftKey & (key >= 'A' && key <= 'Z'));
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin () {
      if (this.loginForm.password === '' || !this.loginForm.username) {
        this.$notify.warning({
          title: '请输入用户名和密码！'
        });
        return;
      };
      this.loading = true;
      this.$store.dispatch('user/login', this.loginForm)
        .then((res) => {
          this.$router.push('/dashboard');
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleRegister () {
      if (this.registerForm.password === '' || this.registerForm.username === '') {
        this.$notify.warning({
          title: '请输入用户名和密码进行注册！'
        });
        return;
      };
      if (this.registerForm.password !== this.confirmPassword) {
        this.$notify.warning({
          title: '两次密码输入不一致！'
        });
        return;
      };
      this.$store.dispatch('user/register', this.registerForm)
        .then((res) => {
          alert('注册成功！');
          this.loginForm.username = getUsername();
          this.registerDialog = false;
        });
    }
  }
};
</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
  $bg: #fff;
  $light_gray: #fff;
  $cursor: #283443;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  /* reset element-ui css 仅作用于本组件*/
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: #ffffff;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: black;
        height: 47px;
        caret-color: black;

        &:-webkit-autofill {
          box-shadow: 0 0 0 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid #DCDFE6;
      border-radius: 5px;
    }
    .el-form-item__error {
      color: red;
      font-size: 12px;
      line-height: 1;
      padding-top: 4px;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
</style>

<style lang="scss" scoped>
  $bg: white;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;
    position: fixed;

    .login-form {
      position: relative;
      width: 420px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: #409EFF;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }

    .thirdparty-button {
      position: absolute;
      right: 0;
      bottom: 6px;
    }

    .register {
      color: #409EFF;
    }

    .noAccount {
      font-size: 12px;
      color: #888888;
    }

    .go-right {
      float: right;
    }

    @media only screen and (max-width: 470px) {
      .thirdparty-button {
        display: none;
      }
    }
  }
</style>
