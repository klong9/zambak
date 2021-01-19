<template>
  <div class="payment">
    <TopTitle
      :top_title="title"
      @jumpSearch="JumpTo"
      :isPayment="true"
    ></TopTitle>
    <div class="payment_content" v-show="!successshow">
      <div class="content_lis">
        <div class="lis_li" v-for="(item, index) in shoppinglis" :key="index">
          <div class="li_img"><img :src="item.imgUrl" alt="" /></div>
          <div class="li_ringht">
            <span class="li_name">{{ item.name }}</span
            ><br />
            <span class="li_picre">${{ item.price | pricefliter }}</span>
          </div>
        </div>
      </div>
      <div class="content_credit">
        <div class="credit_title">
          <span class="credit_name">Credit Card</span>
          <div class="credit_img">
            <img :src="crecardimgUrl" alt="" />
          </div>
        </div>
        <van-form @submit="onSubmit" class="form_lis">
          <van-field
            class="formli formNameSurname"
            v-model="nameAndSurname"
            name="nameAndSurname"
            center
            placeholder="Name，Surname"
          />
          <van-field
            class="formli formCardNumber"
            v-model="cardNumber"
            center
            name="cardNumber"
            placeholder="Card Number"
          />
          <van-field
            class="formli formCVV"
            center
            v-model="CVV"
            name="CVV"
            placeholder="CVV"
          />
          <van-field
            class="formli formMonth"
            center
            v-model="Month"
            name="Month"
            placeholder="Month"
          />
          <van-field
            class="formli formYear"
            center
            v-model="Year"
            name="Year"
            placeholder="Year"
          />
          <van-field class="from_checkbox" name="checkbox">
            <template #input>
              <van-checkbox
                class="checkbox_left"
                checked-color="#f71037"
                v-model="checkbox"
                icon-size="5.3333vw"
                shape="square"
              />
              <div class="checkbox_content">
                I have read the <span>terms of payment</span>, I agree
              </div>
            </template>
          </van-field>
          <div class="form_submit">
            <van-button
              class="form_but"
              round
              block
              type="info"
              native-type="submit"
              >Pay Now</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
    <div class="payment_success" v-show="successshow">
      <div class="success_icon"><i class="iconfont">&#xe61c;</i></div>
      <div class="success_p">
        <span>Congratulations!</span><br />
        <span>Your payment is successful</span>
      </div>
      <div class="success_but" @click="offSuccess">Done</div>
    </div>
    <navigation class="nav"></navigation>
  </div>
</template>

<script>
import TopTitle from "./TopTitle.vue";
import navigation from "./navigation.vue";
import { Toast } from "vant";

export default {
  data() {
    return {
      title: "Payment",
      nameAndSurname: "",
      cardNumber: "",
      crecardimgUrl: require("../assets/creditphoto.png"),
      CVV: "",
      Month: "",
      Year: "",
      checkbox: false,
      checkboxGroup: [],
      successshow: false,
    };
  },
  methods: {
    JumpTo(str) {
      this.$router.push({ name: str });
    },
    onSubmit(values) {
      if (!values.checkbox) {
        Toast("请同意协议");
      } else if (!this.shoppinglis.length) {
        Toast("请选择商品");
      } else {
        this.successshow = !this.successshow;
      this.$store.commit("clearCards");
      }
    },
    offSuccess() {
      this.successshow = !this.successshow;
      this.JumpTo("home");
    },
  },
  computed: {
    shoppinglis: function () {
      return this.$store.state.cards;
    },
  },
  components: {
    navigation,
    TopTitle,
  },
  filters: {
    pricefliter(value) {
      let newVal = parseFloat(value).toFixed(2);
      return newVal;
    },
  },
};
</script>

<style lang="less" scoped>
.payment {
  background: #f5f5f5;
  .payment_content {
    padding: 0 3.7333vw;
    position: relative;
    top: -12.8vw;
    .content_lis {
      background: #fff;
      border-radius: 2.1333vw;
      margin-bottom: 2.6667vw;

      .lis_li {
        height: 25.0667vw;
        padding: 4.8vw;
        display: flex;
        justify-content: left;
        box-sizing: border-box;
        border-bottom: 0.2667vw solid #d3d3d3;
        overflow: hidden;
        .li_img {
          width: 14.9333vw;
          height: 14.9333vw;
          border-radius: 2.1333vw;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .li_ringht {
          margin-left: 10.6667vw;
          span {
            font-size: 3.7333vw;
            font-weight: bold;
            line-height: 8vw;
          }
          .li_name {
            letter-spacing: 0.2667vw;
            color: #333333;
          }
          .li_picre {
            color: #f71037;
          }
        }
      }
    }
    .content_credit {
      background: #fff;
      border-radius: 2.1333vw;
      line-height: 15.4667vw;
      .credit_title {
        border-bottom: 0.2667vw solid #d3d3d3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .credit_name {
          padding-left: 4.8vw;
          font-size: 3.7333vw;
          letter-spacing: 0.2667vw;
          color: #333333;
          font-weight: bold;
        }
        .credit_img {
          padding-right: 4.8vw;

          img {
            width: 26.1333vw;
            height: 5.3333vw;
          }
        }
      }
      .form_lis {
        margin: 0 4.8vw;
        .formli {
          border: 0.2667vw solid #d3d3d3;
          border-radius: 1.0667vw;
          height: 10.6667vw;
          margin-top: 4.2667vw;
          float: left;
          padding: 2.6667vw 4.2667vw;
          font-size: 3.7333vw;
        }
        // .formNameSurname {
        // }
        .formCardNumber {
          width: 57.3333vw;
        }
        .formCVV {
          width: 21.8667vw;
          float: right;
        }
        .formMonth {
          width: 39.4667vw;
        }
        .formYear {
          width: 39.4667vw;
          float: right;
        }
        .from_checkbox {
          padding: 5.3333vw 0;
          .checkbox_left {
            // width: 4.8vw;
            // height: 4.8vw;
            border-radius: 0.8vw;
            // border: 1px solid #000;
          }
          .checkbox_content {
            font-size: 3.2vw;
            color: #989898;
            margin-left: 2.1333vw;
            span {
              color: #f71037;
            }
          }
        }
        .form_submit {
          padding-bottom: 4.8vw;
          .form_but {
            width: 49.3333vw;
            height: 10.6667vw;
            font-size: 3.2vw;
            margin: 0 auto;
            font-weight: bold;
            background: #f71037;
            border: 0;
          }
        }
      }
    }
  }
  .payment_success {
    width: 92.5333vw;
    height: 168.5333vw;
    position: absolute;
    top: 27.4667vw;
    left: 3.7333vw;
    background: #fff;
    border-radius: 2.1333vw;
    text-align: center;
    //   float: left;
    .success_icon {
      margin-top: 34.4vw;
      i {
        font-size: 32vw;
        color: #52c51b;
      }
    }
    .success_p {
      font-size: 3.7333vw;
      line-height: 6.9333vw;
      color: #8a8a8a;
      margin-top: 17.0667vw;
    }
    .success_but {
      width: 49.3333vw;
      height: 10.6667vw;
      line-height: 10.6667vw;
      margin: 28.2667vw auto 0;
      border-radius: 5.3333vw;
      background: #f71037;
      color: #fff;
      font-size: 3.2vw;
      font-weight: bold;
    }
  }
}
</style>