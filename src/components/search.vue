<template>
  <!-- 搜索页面 -->
  <div class="search">
    <!-- 顶部标题搜索框 -->
    <TopTitle
      class="topTitle"
      :top_title="title"
      :isSearch="isserver"
      @showSearch="showPopup"
    ></TopTitle>
    <!-- 商品筛选 -->
    <van-popup class="popup" v-model="show" :overlay-style="{ top: '40vw' }">
      <div class="popup_filter">
        <div class="filter_title">Filters</div>
        <div class="filter_switch">
          <span>Show Best Sellers</span>
          <van-switch
            v-model="checked1"
            active-color="#52c51b"
            inactive-color="#f71037"
            size="6.9333vw"
          />
        </div>
        <div class="filter_switch">
          <span>Cheap to Expensive</span>
          <van-switch
            v-model="checked2"
            active-color="#52c51b"
            inactive-color="#f71037"
            size="6.9333vw"
            @change="vanSwitchChange"
          />
        </div>
        <div class="filter_price">
          <span>Price</span>
          <div class="fp_slider">
            <span>$ 5</span>
            <van-slider
              class="slider_wider"
              max="200"
              v-model="value"
              @change="onChange"
              active-color="#f71037"
              inactive-color="#f71037"
              button-size="5.8667vw"
            />
            <span>Max.</span>
          </div>
        </div>
      </div>
      <button class="popup_but" @click="showPopup">Done</button>
    </van-popup>
    <!-- recommended推荐模块 -->
    <div class="search_content">
      <div class="content_title">Recommended</div>
      <!-- 商品模块 -->
      <div
        class="recommend"
        @click="JumpTo('detail', item)"
        v-for="(item, index) in recommendlis"
        :key="index"
      >
        <div class="recommend_img">
          <img :src="item.imgUrl" alt="item.name+'图片'" />
        </div>
        <div class="recommend_right">
          <p>{{ item.des }}</p>
          <span>${{ item.price | pricefliter }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./TopTitle.vue";
export default {
  data() {
    return {
      title: "Search",
      isserver: true,
      recommendlis: [],
      recommendcopylis:[],
      show: false,
      checked1: true,
      checked2: true,
      value: 200,
    };
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "/api/recomment",
    }).then((res) => {
      this.recommendlis = res.data.recomment_list;
      this.recommendcopylis= JSON.parse(JSON.stringify(this.recommendlis));
    });


  },
  methods: {
    JumpTo(str, obj) {
      this.$router.push({ name: str, query: obj });
    },
    showPopup() {
      this.show = !this.show;
    },
    onChange(value) {
      console.log(value);
      this.recommendlis = this.recommendcopylis.filter((v, i) => {
        return v.price < value;
      });
    },
    vanSwitchChange(checked) {
      this.checked2 = checked;
    },
  },
  computed: {
    
  },
  components: {
    TopTitle,
  },
  filters: {
    pricefliter(value) {
      let newVal = parseFloat(value).toFixed(2);
      return newVal;
    },
  },
  watch: {
    checked2: function (newvalue, oldvalue) {
      if (newvalue) {
        this.recommendlis.reverse();
      } else {
        this.recommendlis.reverse();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  .search_content {
    height: 160vw;
    overflow: scroll;
    padding: 0 3.7333vw;
    .content_title {
      font-size: 3.7333vw;
      font-weight: bold;
      color: #333333;
      line-height: 6.4vw;
      padding-top: 8.5333vw;
    }
    .recommend {
      height: 29.8667vw;
      box-sizing: border-box;
      padding: 3.7333vw 0;
      border-bottom: 0.2667vw solid #f0f0f0;
      display: flex;

      .recommend_img {
        width: 22.4vw;
        height: 22.4vw;
        overflow: hidden;
        border-radius: 2.1333vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .recommend_right {
        margin-left: 3.7333vw;
        p {
          width: 67.7333vw;
          height: 12.8vw;
          font-size: 3.7333vw;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 6.4vw;
          color: #5d5d5d;
        }
        span {
          font-size: 3.7333vw;
          color: #333333;
          font-weight: bold;
        }
      }
    }
  }
  .popup {
    width: 92.5333vw;
    // height: 76.2667vw;
    position: absolute;
    top: 85.3333vw;
    left: 50%;
    background: rgba(0, 0, 0, 0);
    .popup_filter {
      height: 58.1333vw;
      background: #fff;
      border-radius: 2.1333vw;
      padding: 5.8667vw 3.7333vw;
      box-sizing: border-box;
      .filter_title {
        font-size: 4.2667vw;
        color: #333333;
        font-weight: bold;
      }
      .filter_switch {
        line-height: 12.8vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.2667vw solid #f0f0f0;
        span {
          font-size: 14px;
          color: #5d5d5d;
        }
      }
      .filter_price {
        span {
          font-size: 14px;
          color: #5d5d5d;
          line-height: 10.6667vw;
        }
        .fp_slider {
          display: flex;
          align-items: center;
          span {
            font-size: 3.2vw;
            color: #333333;
            line-height: 7.4667vw;
          }
          .slider_wider {
            width: 65.0667vw;
            margin: 0 4.2667vw;
          }
        }
      }
    }
    .popup_but {
      width: 100%;
      height: 13.3333vw;
      border-radius: 6.6667vw;
      background: #f71037;
      border: none;
      margin-top: 4.8vw;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>