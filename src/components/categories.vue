<template>
  <!-- categories目录页面 -->

  <div class="categories">
    <TopTitle :top_title="title" @jumpSearch="JumpTo"></TopTitle>
    <div class="categories_content">
      <!-- 节假日目录导航 -->
      <div class="content_all" v-show="show">
        <div class="all_tit" @click="EnterRecommend">
          <i class="iconfont">&#xe649;</i>
          <span>All</span>
        </div>
        <div class="all_li">
          <i class="iconfont">&#xe670;</i>
          <span>Flowers</span>
          <i class="iconfont right_arrow">&#xe665;</i>
        </div>
        <div class="all_li" v-for="(item, index) in holidaylis" :key="index">
          <i class="iconfont" :class="[iconlis[index]]"></i>
          <span>{{ item.holiday }}</span>
          <i class="iconfont right_arrow">&#xe665;</i>
        </div>
      </div>
      <!-- 节假日推荐鲜花 -->
      <div class="content_items" v-show="!show">
        <div class="citem" v-for="(item, index) in holidayli" :key="index">
          <div class="item_img"><img :src="item.imgUrl" alt="" /></div>
          <div class="item_content">
            <div class="item_left">
              <!-- <span>{{ holidaylis[index].holiday }}</span> -->
              <span>Flowers</span>
            </div>
            <div class="item_right" @click="JumpTo('detail',item)">View</div>
          </div>
        </div>
      </div>
    </div>

    <navigation class="nav"></navigation>
  </div>
</template>

<script>
import navigation from "./navigation.vue";
import TopTitle from "./TopTitle.vue";

export default {
  data() {
    return {
      title: "Categories",
      holidaylis: [],
      iconlis: [
        "icon-lingdai",
        "icon-lianyiqun",
        "icon-Holiday-icon_qingrenjie",
        "icon-accessories",
        "icon-birthday",
      ],
      holidayli: [],
      show: true,
    };
  },
  mounted() {
    this.show = true;
    // 获取目录节假日列表
    this.$axios({
      method: "get",
      url: "/api/holiday",
    }).then((res) => {
      this.holidaylis = res.data.holiday_list;
    });
  },
  methods: {
    JumpTo(str, obj) {
      this.$router.push({ name: str, query: obj });
    },

    // 获取某个节假日
    GetHoliday(id) {
      this.$axios({
        method: "get",
        url: "/api/flowerlistforholiday",
        params: {
          id: id,
        },
      }).then((res) => {
        this.holidayli = res.data.list;
      });
    },
    EnterRecommend() {
      this.show = !this.show;
      this.GetHoliday("1001");
    },
  },
  components: {
    navigation,
    TopTitle,
  },
  filters: {
    // filterHoliday:function(val){
    // console.log(val);
    // if(val===''){
    //   return ''
    // }
    // }
  },
};
</script>

<style lang="less" scoped>
.categories {
  .categories_content {
    height: 160vw;
    overflow: scroll;
    .content_all {
      padding: 0 3.7333vw;
      .all_tit {
        line-height: 16vw;
        i {
          font-size: 4.2667vw;
          color: #f71037;
        }
        span {
          font-size: 3.7333vw;
          color: #333333;
          font-weight: bold;
          margin-left: 3.7333vw;
        }
      }
      .all_li {
        line-height: 13.3333vw;
        border-top: 1px solid #f0f0f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          font-size: 4.2667vw;
          color: #fe97a8;
        }
        span {
          font-size: 3.7333vw;
          color: #333333;
          margin-left: 9.0667vw;
          flex: 1;
        }
        .right_arrow {
          color: #9c9c9c;
        }
      }
    }
    .content_items {
      background: #f5f5f5;
      padding: 6.9333vw 0;
      .citem {
        width: 92.5333vw;
        height: 62.9333vw;
        margin: 0 auto;
        padding-top: 2.6667vw;
        border-radius: 3.2vw;
        overflow: hidden;
        position: relative;
        .item_img {
          // width: 92.5333vw;
          height: 62vw;

          img {
            width: 100%;
            height: 100%;
            border-radius: 3.2vw;
          }
        }
        .item_content {
          width: 100%;
          height: 18.6667vw;
          background: #fff;
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 3.7333vw;
          box-sizing: border-box;
          .item_left {
            span {
              font-size: 4.2667vw;
              color: #5d5d5d;
              font-weight: bold;
            }
          }
          .item_right {
            width: 28vw;
            height: 8vw;
            border-radius: 4vw;
            background-color: #f71037;
            font-size: 3.2vw;
            letter-spacing: 0.2667vw;
            color: #ffffff;
            font-weight: bold;
            line-height: 8vw;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>