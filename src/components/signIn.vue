<template>
  <!-- 登入页面 -->
  <div class="signIn">
    <div class="signIn_title">Sign in</div>
    <div class="signIn_Inform">
      <!-- 表单组件 -->
      <van-form @submit="onSubmit">
        <van-field
          class="Inform_input"
          v-model="emailval"
          name="email"
          placeholder="email"
          :rules="[{ required: true, message: 'Please enter your username' }]"
        />
        <van-field
          class="Inform_input"
          v-model="passwordval"
          type="password"
          name="password"
          placeholder="password"
          :rules="[{ required: true, message: 'Please enter your password' }]"
        />
        <div class="Inform_forgot">Forgot Password?</div>
        <div class="Inform_remeber">
          <van-field name="checkbox">
            <template #input>
              <van-checkbox
                class="inputcheckbox"
                icon-size="4.8vw"
                checked-color="#f71037"
                v-model="checkbox"
                shape="square"
              />
              <span>Remember Me</span>
            </template>
          </van-field>
        </div>
        <div>
          <van-button
            class="Inform_botton"
            round
            block
            type="info"
            native-type="submit"
            >Sign in</van-button
          >
        </div>
      </van-form>
    </div>
    <!-- 其他登入方式 -->
    <div class="orSignIn">
      <span>OR</span>
      <div class="or_left or_other">Facebook</div>
      <div class="or_right or_other">Twitter</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailval: "",
      passwordval: "",
      checkbox: false,
    };
  },
  mounted() {
    this.getLocalStorage();
  },
  methods: {
    // 登入调用
    onSubmit(values) {
      this.$axios({
        method: "post",
        url: "/api/login",
        data: {
          ...values,
        },
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then((res) => {
        console.log(res);
        // console.log(window.localStorage);
        // 登入成功
        if (res.data.code === "Y") {
          // 勾选remember后账号存入localstorage
          if (values.checkbox === true) {
            // 先清空localStorage数据
            localStorage.clear();
            // 账户密码存入data
            window.localStorage.setItem("data", res.config.data);
            console.log(window.localStorage);
          }
          // 跳转到首页
          this.$router.push({ name: "home" });
        }
      });
    },
    // 获取localStorage数据
    getLocalStorage() {
      let d = JSON.parse(localStorage.getItem('data'));
      this.emailval = d.email;
      this.passwordval = d.password;
    },
  },
};
</script>

<style lang="less" scoped>
@color: #f71037;

.signIn {
  .signIn_title {
    font-size: 5.3333vw;
    letter-spacing: 0.2667vw;
    color: #333333;
    font-weight: bold;
    font-family: "S FPro Text";
    text-align: center;
    margin-top: 13.0667vw;
  }
  .signIn_Inform {
    margin-top: 27.7333vw;
    .Inform_input {
      width: 93.6vw;
      margin: 0 3.2vw;
      font-size: 3.7333vw;
      color: #989898;
      border-bottom: 0.2667vw solid #e6e6e6;
    }
    .Inform_forgot {
      font-size: 3.2vw;
      color: @color;
      font-family: "S FPro Text";
      text-align: right;
      margin: 5.8667vw 3.7333vw 0 0;
    }
    .Inform_remeber {
      .inputcheckbox {
        border-radius: 0.8vw;
      }

      span {
        font-size: 3.7333vw;
        color: #8a8a8a;
        margin-left: 2.4vw;
      }
    }
    .Inform_botton {
      width: 93.6vw;
      height: 13.3333vw;
      background: @color;
      margin: 6.1333vw 3.2vw 0;
      font-size: 4.2667vw;
      font-weight: bold;
    }
  }
  .orSignIn {
    width: 92.5333vw;
    border-top: 1px solid #e6e6e6;
    margin: 15.2vw auto 0;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    span {
      width: 13.3333vw;
      line-height: 8vw;
      background: #fff;
      font-size: 3.2vw;
      color: #8a8a8a;
      position: absolute;
      top: -4vw;
      left: 39.4667vw;
    }
    .or_other {
      width: 43.2vw;
      line-height: 13.3333vw;
      font-size: 3.2vw;
      font-weight: bold;
      color: #fff;
      border-radius: 6.6667vw;
      margin-top: 45px;
    }
    .or_left {
      background: #475a96;
    }
    .or_right {
      background: #5ca2f2;
    }
  }
}
</style>