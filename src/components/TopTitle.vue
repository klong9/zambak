<template>
  <!-- 顶部标题组件 -->
  <div class="TopTitle">
    <div class="top"></div>
    <!-- 标题栏 -->
    <div class="title">
      <i class="iconfont" v-show="!isSearch">&#xe6ae;</i>
      <i class="iconfont" v-show="isSearch" @click="BackTo">&#xe743;</i>
      <div class="title_centent">{{ top_title }}</div>
    </div>
    <!-- 搜索栏 -->
    <div class="top_search" @click="jump('search')" v-show="!isPayment">
      <van-search
        class="search"
        shape="round"
        show-action
        v-model="value"
        placeholder="Search"
        background="#f71037"
      >
        <template class="search_input" #action>
          <div class="right_icon" v-show="!isSearch" @click="notSearch">
            <i class="iconfont">&#xe60d;</i>
          </div>
          <div class="right_icon" v-show="isSearch" @click="onSearch">
            <i class="iconfont">&#xe751;</i>
          </div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script>
export default {
  props: ["top_title", "isSearch", "isPayment"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    notSearch(val) {
      console.log(val);
    },
    onSearch(val) {
      this.$emit("showSearch");
    },
    onCancel() {
      Toast("取消");
    },
    jump(str) {
      this.$emit("jumpSearch", str);
    },
    BackTo() {
      this.$router.back(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.TopTitle {
  height: 40vw;
  background: #f71037;
  .top {
    height: 7.7333vw;
  }
  .title {
    color: #fff;
    font-weight: bold;
    margin-top: 4.8vw;
    line-height: 3.7333vw;
    clear: both;
    i {
      float: left;
      margin-left: 4vw;
      line-height: 3.7333vw;
      font-size: 4.8vw;
    }
    .title_centent {
      font-size: 4.2667vw;
      line-height: 3.7333vw;
      text-align: center;
    }
  }

  .top_search {
    height: 19.2vw;
    .van-icon {
      color: #d8d8d8;
    }
    .search {
      margin-top: 4.2667vw;
      height: 9.0667vw;
      .van-search {
        padding: 2.6667vw 3.2vw;
      }
      .van-search__content {
        height: 8.8vw;
        padding-left: 3.2vw;
        .van-cell {
          padding: 1.3333vw 2.1333vw 1.3333vw 0;
          font-size: 3.7333vw;
          line-height: 6.4vw;
        }
      }
      .search_input {
        height: 19.2vw;
        .van-search__content--round {
          height: 10.6667vw;
          border-radius: 3.2vw;
        }
        .right_icon {
          i {
            font-size: 5.3333vw;
            color: #fff;
          }
        }
      }
    }
  }

}
</style>