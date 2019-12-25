<template>
  <Row type="flex" justify="center" align="middle" class="login" @keydown.enter.native="submitLogin">
    <Row class="signinpanel">
      <Row class="left_signin ">
        <h1>欢迎使用 <strong style="color:#ffffff">知而行 后台管理系统</strong></h1>
        <ul style="margin-top: 9%">
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> SpringBoot</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> Mybatis</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> Vue</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i>iView</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> ES6/7</li>
          <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> axios</li>
        </ul>
        <strong>还没有账号？ <a href="#">请联系相关人员开通&raquo;</a></strong>
      </Row>

      <Row class="right_signin ">
        <Alert type="error" show-icon v-if="error">{{ errorMsg }}</Alert>

        <Form ref="usernameLoginForm" :model="form" :rules="rules" class="form">
          <FormItem prop="username">
            <Input
              v-model="form.loginName"
              prefix="ios-contact"
              size="large"
              clearable
              placeholder="请输入用户名"
              autocomplete="off"
            />
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="form.password"
              prefix="ios-lock"
              size="large"
              clearable
              placeholder="请输入密码"
              autocomplete="off"
            />
          </FormItem>
          <Row>
            <Button class="login-btn" type="primary" size="large" :loading="loading" @click="submitLogin" long>
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </Button>
          </Row>
        </Form>
      </Row>

      <Row style="width:100%">
        &copy; 2018 All Rights Reserved. 知而行（上海）营销咨询有限公司 <br />
        <a href="www.sweetmartmarketing.com" target="_blank" rel="nofollow">粤ICP备05081589号-2</a><br />
      </Row>
    </Row>
  </Row>
</template>

<script>
import * as system from '../api/system'

export default {
  name: 'about',
  data() {
    return {
      error: false,
      errorMsg: '',
      loading: false,
      form: {
        loginName: '',
        password: ''
      },
      rules: {
        loginName: [
          {
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    submitLogin() {
      this.$refs.usernameLoginForm.validate(valid => {
        if (!valid) return
        this.loading = true
        system.login(this.form).then(res => {
          if (res.isSuccess) {
            this.$store.dispatch('system/addRouter')
          } else {
            this.$Message.error(res.msg)
          }
          this.loading = false
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  .signinpanel {
    width: 850px;
    margin: 5% auto 0;
  }

  // .signinpanel .logopanel {
  //     float: none;
  //     width: auto;
  //     padding: 0;
  //     background: 0 0
  // }

  // .signinpanel .signin-info ul {
  //     list-style: none;
  //     padding: 0;
  //     margin: 20px 0
  // }

  .signinpanel form {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    -moz-box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
    -webkit-box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
    box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    padding: 30px;
  }

  .left_signin {
    width: 65%;
    float: left;
    height: 310px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
  }
  .right_signin {
    margin-top: 5%;
    z-index: 1;
    width: 35%;
    float: left;
    height: 305px;
  }

  .foot {
    margin-bottom: 2vh;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    .help {
      margin: 0 auto;
      margin-bottom: 1vh;
      width: 60%;
      .item {
        color: rgba(0, 0, 0, 0.45);
      }
      :hover {
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}
</style>
