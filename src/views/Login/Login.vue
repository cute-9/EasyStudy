<template>
  <div class="login">
    <div class="loginPanel">
      <el-form
        ref="loginForm"
        label-position="left"
        label-width="80px"
        :model="loginForm"
        :rules="loginRules"
      >
      <el-form-item>
    <div class="login_radio">
    <el-radio-group v-model="loginForm.role">
      <el-radio-button label="student"></el-radio-button>
      <el-radio-button label="teacher"></el-radio-button>
    </el-radio-group>
  </div>
      </el-form-item>
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input show-password v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" class="validateBox" prop="validateCode">
          <el-row>
            <el-col :span="12"
              ><el-input v-model="loginForm.validateCode"></el-input
            ></el-col>
            <el-col :span="12"
              ><div style="border: none" @click="refreshCode">
                <HIdentify :identifyCode="identifyCode"></HIdentify></div
            ></el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="btn">
      <el-button
        type="primary"
        style="width: 100%"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { HIdentify } from "@/components/index";
import { login } from '@/api/login'
import qs from 'qs'
export default {
  name: "Login",
  components: {
    HIdentify,
  },
  data() {
    const validateAccount = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的账号"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("请输入正确的密码"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value !== this.identifyCode) {
        callback(new Error("验证码错误，请重新输入"));
      } else {
        callback();
      }
    };
    return {
      // 登录的相关数据
      loginForm: {
        username: "张振宇",
        password: "888888",
        role:"teacher",
        validateCode: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateAccount },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        validateCode: [
          { required: true, trigger: "blur", validator: validateCode },
        ],
      },
      // 可选值
      identifyCodes: "1234567890",
      identifyCode: "",
    };
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成随机数
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    // 登录逻辑
   async handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          login(qs.stringify({
            username:this.loginForm.username,
            password:this.loginForm.password,
            role:this.loginForm.role
          })).then((res) => {
            window.localStorage.setItem("token",res.data.token)
            // var id=res.data.info.id
                     window.localStorage.setItem("id",res.data.info.id)
                    //  console.log(res.data.info);
            this.$router.push('/layout/home')
          })
          // this.$router.push("/");
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
    const self = this;
    self.makeCode(this.identifyCodes, 4);
    this.refreshCode();
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background:url("http://bytes.isekko.cn/Fus2LooMMjlUmB83Wbe-xAAtO4ic") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
align-items: center;
  /* min-width: 289px; */
}
.loginPanel {
  width: 30%;
  /* height: 250px; */
  /* margin-top: 199px; */
  border-radius: 14px;
  padding: 30px;
  background-color: rgb(243, 243, 243,0.3);
}
/* .login_radio{
  margin-left: auto;
  margin-right: auto;
} */
.btn{
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}
</style>
