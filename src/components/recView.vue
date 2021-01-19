<template>
  <!-- 商品模块 -->
  <div class="recView" @click="jump('detail')" >
    <div class="view_left">
      <img :src="view_item.imgUrl" alt="" />
    </div>
    <div class="view_right">
      <span class="right_name">{{ view_item.name }}</span>
      <span class="right_shopping">Free Shipping</span>
      <div class="right_price">${{ view_item.price | pricefliter }}</div>
      <div class="right_rate">
        <!-- 评分 -->
        <van-rate v-model="view_item.rate" size="2.6667vw" color="#e86d4d"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["view_item"],
  methods:{
    jump(val){
      this.$emit('jumpTo',val,this.view_item)
    }
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
.recView {
  width: 92.5333vw;
  height: 40.8vw;
  background: #fff;
  box-sizing: border-box;
  border-radius: 2.1333vw;
  margin: 0 auto 2.6667vw;
  padding: 2.6667vw;
  display: flex;
  .view_left {
    width: 35.4667vw;
    height: 35.4667vw;
    border-radius: 2.1333vw;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .view_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5.3333vw 8vw;
    span {
      font-size: 3.7333vw;
      color: #5d5d5d;
    }
    .right_name {
      font-weight: bold;
    }
    .right_shopping {
      font-size: 3.2vw;
      color: #e86d4d;
      font-weight: 500;
    }
    .right_price {
      color: #f71037;
      font-size: 3.7333vw;
    }
    // .right_rate {
    // }
  }
}
</style>