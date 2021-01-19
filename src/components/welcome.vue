<template>
  <div class="welcome">
    <van-swipe
      @change="onChange"
      :loop="false"
      :show-indicators="false"
      ref="swipe"
      indicator-color="#f71037"
    >
      <!-- 欢迎页面第一面 -->
      <van-swipe-item class="van_swipe_item">
        <div class="introduction fristintro">
          <div class="introduction_title">welcome</div>
          <div class="introduction_content">
            Praesent tellus mauris, tincidunt nec ipsum id, faucibus
            pellentesque leo. Nunc congue ac tellus quis porttitor.
          </div>
        </div>
        <!-- 轮播图组件 -->
        <myswipe class="myswipe_first" :coustom_class="swipeClass"></myswipe>
        <div class="nextSwipe" @click="nextSwiped">
          <i class="iconfont">&#xe665;</i>
        </div>
      </van-swipe-item>
      <!-- 欢迎页面第二面 -->
      <van-swipe-item class="van_swipe_item"
        ><myswipe class="myswipe_two"></myswipe>
        <div class="introduction">
          <div class="introduction_title">welcome</div>
          <div class="introduction_content">
            Praesent tellus mauris, tincidunt nec ipsum id, faucibus
            pellentesque leo. Nunc congue ac tellus quis porttitor.
          </div>
        </div>
        <div class="two_bottom">
          <div class="left" @click="two_prev">
            <i class="iconfont">&#xe66c;</i>
          </div>
          <div class="rigth" @click="nextSwiped">Next</div>
        </div>
      </van-swipe-item>
      <!-- 欢迎页面第三面 -->
      <van-swipe-item class="van_swipe_item">
        <myswipe class="myswipe_three"></myswipe>
        <div class="introduction">
          <div class="introduction_title">welcome</div>
          <div class="introduction_content">
            Praesent tellus mauris, tincidunt nec ipsum id, faucibus
            pellentesque leo. Nunc congue ac tellus quis porttitor.
          </div>
        </div>
        <div class="three_bottom" @click="Jumpto('signIn')">Get Started</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import myswipe from "./myswipe.vue";

export default {
  data() {
    return {
      current: 0,
      // 子轮播图组件的指示器类名
      swipeClass: "myfrist_custom",
      imgarr: [
        require("../assets/welcome1.jpg"),
        require("../assets/welcome1.jpg"),
        require("../assets/welcome1.jpg"),
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    nextSwiped() {
      this.$refs.swipe.next();
    },
    two_prev() {
      this.$refs.swipe.prev();
    },
    Jumpto(str){
      this.$router.push({name:str})
    }
  },
  components: {
    myswipe,
  },
};
</script>

<style lang="less" >
@color: #f71037;
.welcome {
  .van_swipe_item {
    height: 216vw;
    overflow: scroll;
    // img {
    //   width: calc(100vw--7.4667vw);
    //   height: 64.8vw;
    //   margin-top: 39.4667vw;
    //   padding: 0 3.7333vw;
    // }
    .introduction {
      margin-top: 20.2667vw;
      .introduction_title {
        font-size: 4.2667vw;
        color: #333333;
        font-weight: bold;
        font-family: "S FPro Text";
        text-align: center;
      }
      .introduction_content {
        width: 82.4vw;
        height: 20.8vw;
        font-size: 3.7333vw;
        line-height: 6.9333vw;
        margin: 11.2vw auto 0;
        color: #5d5d5d;
        font-family: "S FPro Text";
        text-align: center;
      }
    }
    .fristintro {
      margin-top: 12.8vw;
    }
    .nextSwipe {
      width: 1.6vw;
      height: 3.2vw;
      position: absolute;
      top: 205.3333vw;
      left: 93.8667vw;
    }
    .myswipe_first {
      margin-top: 42.6667vw;
    }
    .myswipe_two,
    .myswipe_three {
      margin-top: 39.4667vw;
    }

    .two_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20.7333vw;
      margin-bottom: 8.5333vw;
      padding: 0 7.4667vw;
      height: 8vw;

      .left {
        i{

          font-size: 4.2667vw;
        }
      }
      .rigth {
        width: 28vw;
        height: 8vw;
        line-height: 8vw;
        border-radius: 4vw;
        background: @color;
        text-align: center;
        font-size: 3.2vw;
        color: #fff;
        font-weight: bold;
      }
    }
    .three_bottom {
      width: 93.6vw;
      height: 13.3333vw;
      line-height: 13.3333vw;
      border-radius: 6.6667vw;
      background-color: @color;
      text-align: center;
      margin:18.4vw auto 0;
      font-size: 4.2667vw;
      color: #fff;
      font-weight: bold;
    }
  }
}
.myfrist_custom {
  padding-top: 34.6667vw;
}
</style>