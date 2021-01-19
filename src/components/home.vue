<template>
  <!-- home页面 -->
  <div class="home">
    <!-- 顶部标题搜索框 -->
    <TopTitle :top_title="title" @jumpSearch="JumpTo"></TopTitle>
    <!-- 内容框 -->
    <div class="home_content">
      <!-- carousel轮播 -->
      <div class="carousel">
        <div class="car_title">Featured</div>
        <van-swipe @change="onChange">
          <van-swipe-item @click="JumpTo('detail', item)" v-for="(item, index) in carousellis" :key="index"
            ><img :src="item.imgUrl" :alt="['图片' + (index + 1)]" />
            <span>{{ item.name }}</span></van-swipe-item
          >
          <template #indicator>
            <div class="custom-indicator">
              <div
                class="unselected"
                :class="{ selected: current === index }"
                v-for="(item, index) in carousellis"
                :key="index"
              ></div>
            </div>
          </template>
        </van-swipe>
      </div>
      <!-- recent推荐 -->
      <div class="recent">
        <div class="recent_title">Recently Viewed</div>
        <recView
          v-for="(item, index) in recentlis"
          :key="index"
          :view_item="item"
          @jumpTo="JumpTo"
        ></recView>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./TopTitle.vue";
import recView from "./recView.vue";
export default {
  data() {
    return {
      title: "Home",
      current: 0,
      carousellis: [],
      recentlis: [],
    };
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "/api/home",
    }).then((res) => {
      this.carousellis = res.data.carousel_list;
      this.recentlis = res.data.recent_list;
    });
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    JumpTo(str,obj){
      this.$router.push({name:str,query:obj})
    }
  },
  components: {
    TopTitle,
    recView,
  },
};
</script>

<style lang="less" scoped>
.home {
  background: #f5f5f5;
  .home_content {
    height: 160vw;
    overflow: scroll;
    .carousel {
      .car_title {
        font-size: 3.7333vw;
        color: #333333;
        font-weight: bold;
        line-height: 13.3333vw;
        padding: 5.0667vw 0 0 3.7333vw;
        // margin: 10.1333vw 0 5.0667vw 3.7333vw;
      }
      img {
        width: 95.7333vw;
        height: 63.7333vw;
        margin: 0 2.1333vw;
        border-radius: 2.1333vw;
      }
      span {
        position: absolute;
        top: 28.8vw;
        left: 18.4vw;
        color: #333333;
        font-size: 5.8667vw;
      }
      .custom-indicator {
        // position: absolute;
        // right: 5px;
        // bottom: 5px;
        // padding: 2px 5px;
        // font-size: 12px;
        // background: rgba(0, 0, 0, 0.1);
        width: 10.3333vw;
        margin: 2.9333vw auto 0;
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
          background-color: #f71037;
        }
      }
    }
    .recent {
      .recent_title {
        font-size: 3.7333vw;
        color: #333333;
        font-weight: bold;
        line-height: 10.6667vw;
        padding: 5.0667vw 0 0 3.7333vw;
      }
    }
  }
}
</style>