<template>
  <!-- 轮播图组件 -->
  <div class="myswipe">
    <van-swipe @change="onChange" ref="swipe" indicator-color="#f71037">
      <van-swipe-item>
        <img src="../assets/welcome1.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item
        ><img src="../assets/welcome2.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../assets/welcome3.jpg" alt=""
      /></van-swipe-item>
      <!-- 指示器 -->
      <template #indicator>
        <div class="custom-indicator" :class="coustom_class">
          <div
            class="unselected"
            :class="{ selected: current === index }"
            v-for="(item, index) in imgarr"
            :key="index"
          ></div>
        </div>
      </template>

    </van-swipe>
  </div>
</template>

<script>
export default {
    props:["coustom_class",'imglis'],
  data() {
    return {
      current: 0,
      imgarr: [
        require("../assets/welcome1.jpg"),
        require("../assets/welcome2.jpg"),
        require("../assets/welcome3.jpg"),
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    // next() {
    //   this.$refs.swipe.next();
    // },
  },
};
</script>

<style lang="less" scoped>
@color: #f71037;
.myswipe {
  img {
    width: calc(100vw--7.4667vw);
    height: 64.8vw;
    padding: 0 3.7333vw;
  }

  .custom-indicator {
    width: 9.3333vw;
    margin: 12.8vw auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .unselected {
      width: 1.8667vw;
      height: 1.8667vw;
      border-radius: 1.0667vw;
      background: #ffc7d1;
      // margin-left: 1.3333vw;
    }

    .selected {
      width: 2.9333vw;
      height: 2.9333vw;
      border-radius: 1.6vw;
      background-color: @color;
    }
  }
}
</style>