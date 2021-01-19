<template>
  <!-- 底部导航栏 -->
  <!-- #icon="props" -->
  <div class="navigation">
    <van-tabbar
      class="nav_tabbar"
      v-model="active"
      active-color="#f71037"
      inactive-color="#9c9c9c"
      fixed
      route
    >
      <van-tabbar-item replace to="/home">
        <template #icon="props">
          <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
          <div class="nav_item" :class="props.active ? 'isactive' : ''">
            <i class="iconfont">&#xe7b6;</i>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/search">
        <template #icon="props">
          <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
          <div class="nav_item" :class="props.active ? 'isactive' : ''">
            <i class="iconfont">&#xe7b7;</i>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/categories">
        <template #icon="props">
          <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
          <div class="nav_item" :class="props.active ? 'isactive' : ''">
            <i class="iconfont">&#xe7b9;</i>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/chats">
        <template #icon="props">
          <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
          <div class="nav_item" :class="props.active ? 'isactive' : ''">
            <i class="iconfont">&#xe7b8;</i>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/settings">
        <template #icon="props">
          <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
          <div class="nav_item" :class="props.active ? 'isactive' : ''">
            <div class="nav_img"></div>
          </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>


<style lang="less" scoped>
.navigation {
  height: 16vw;
  .nav_tabbar {
    height: 13.3333vw;
  }
  .nav_item {
    width: 10.1333vw;
    height: 10.1333vw;
    text-align: center;
    line-height: 10.1333vw;
    position: relative;
    i {
      font-size: 4.8vw;
    }
    .nav_img {
      width: 6.4vw;
      height: 6.4vw;
      margin: 0 auto;
      border-radius: 3.2vw;
      background: url("../assets/Photo.png") no-repeat;
      background-position: 0 -0.5333vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .isactive {
    background: #ffe4e9;
    border-radius: 2.1333vw;
  }
}
</style>