<template>
  <!-- 详情页面 -->
  <div class="detail">
    <TopTitle :top_title="title" @jumpSearch="JumpTo"></TopTitle>
    <div class="detail_content">
      <div class="content_img">
        <img :src="item.imgUrl" alt="" />
        <div class="FavoriteAndSharing">
          <i
            class="iconfont"
            :class="addshoppinged ? 'icon-aixin' : 'icon-favorites-copy'"
            @click="AddToShoppingCart"
          ></i>
          <i class="iconfont" :class="'icon-upload'" @click="showPopup"></i>
        </div>
      </div>
      <van-popup class="popup" v-model="show">
        <div class="popup_share">
          <div class="share_items">
            <div class="share_title fontStyle">Share on</div>
            <div class="share_item fontStyle">
              <i class="iconfont">&#xe641;</i>Facebook
            </div>
            <div class="share_item fontStyle">
              <i class="iconfont">&#xe6e8;</i>Twitter
            </div>
            <div class="share_item fontStyle">
              <i class="iconfont">&#xe622;</i>Email
            </div>
          </div>
          <div class="share_but" @click="showPopup">Share</div>
        </div>
      </van-popup>
      <div class="content_introduction">
        <div class="intro_NaP">
          <span class="intro_N">{{ item.name }}</span>
          <span class="intro_P">$ {{ item.price | pricefliter }}</span>
        </div>
        <div class="intro_BN" @click="JumpTo('payment')">Buy Now</div>
        <div class="intro_des">
          {{ item.des }}
        </div>
      </div>
    </div>
    <navigation class="nav"></navigation>
  </div>
</template>

<script>
import TopTitle from "./TopTitle.vue";
import navigation from "./navigation.vue";

export default {
  props: [],
  data() {
    return {
      title: "Product Detail",
      show: false,
      li: {},
      item: {},
      addshoppinged: false,
    };
  },
  mounted() {
    this.li = this.$route.query;
    this.$axios({
      method: "get",
      url: "/api/flowerdetail",
      params: {
        flowerId: this.li.id,
      },
    }).then((res) => {
      this.item = res.data;
    });

    this.initshoppinged();
  },
  methods: {
    JumpTo(str) {
      this.$router.push({ name: str });
    },
    AddToShoppingCart() {
      this.addshoppinged = !this.addshoppinged;
      // console.log(this.$store);
      this.item.shoppinged = this.addshoppinged;
      this.$store.commit("addCards", this.item);
    },
    showPopup() {
      this.show = !this.show;
    },
    initshoppinged() {
      const cards = this.$store.state.cards;
      console.log(cards);
      if (!cards) {
        this.addshoppinged = false;
      } else {
        cards.some((item) => {
          console.log(this.li);
          if (item.id === this.li.id) {
            console.log(111);
            this.addshoppinged = true;
            return true;
          }
        });
      }
      console.log(222);
      this.addshoppinged = false;
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
  computed: {
    // addshoppinged() {
    //   const cards = this.$store.state.cards;
    //   console.log(cards);
    //   if (!cards) {
    //     return this.shoppinged;
    //   } else {
    //     cards.forEach((item) => {
    //       if (item.id === this.item.id) {
    //         console.log(111);
    //         return !this.shoppinged;
    //       }
    //     });
    //     return this.shoppinged;
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
.detail {
  .detail_content {
    height: 160vw;
    overflow: scroll;
    background: #f5f5f5;
    padding: 0 3.7333vw;

    .content_img {
      border-radius: 3.2vw;
      overflow: hidden;
      margin-top: 9.0667vw;
      position: relative;
      img {
        width: 100%;
        height: 66.6667vw;
      }
      .FavoriteAndSharing {
        position: absolute;
        top: 12vw;
        right: 0;
        height: 21.3333vw;
        i {
          display: block;
          width: 14.1333vw;
          height: 8vw;
          border-radius: 2.1333vw 0 0 2.1333vw;
          background: #fff;
          color: #f71037;
          font-size: 3.7333vw;
          line-height: 8vw;
          text-align: center;
          margin-bottom: 2.6667vw;
        }
      }
    }
    .popup {
      background: rgba(0, 0, 0, 0);
      .popup_share {
        width: 92.5333vw;
        .share_items {
          line-height: 11.2vw;
          background: #fff;
          border-radius: 3.2vw;
          overflow: hidden;
          .fontStyle {
            font-size: 3.7333vw;
            color: #787878;
          }
          .share_title {
            text-align: center;
            border-bottom: 0.2667vw solid #f7f7f7;
          }
          .share_item {
            padding-left: 3.7333vw;
            border-bottom: 0.2667vw solid #f7f7f7;
            i {
              margin: 0 5.3333vw;
            }
          }
        }
        .share_but {
          width: 93.6vw;
          height: 13.3333vw;
          border-radius: 6.6667vw;
          margin-top: 6.4vw;
          background: #f71037;
          text-align: center;
          line-height: 13.3333vw;
          color: #fff;
          font-weight: bold;
        }
      }
    }
    .content_introduction {
      .intro_NaP {
        margin: 5.3333vw 0;
        line-height: 5.3333vw;
        .intro_N {
          font-size: 3.7333vw;
          color: #333333;
          font-weight: bold;
        }
        .intro_P {
          font-size: 4.8vw;
          color: #f71037;
          float: right;
        }
      }
      .intro_BN {
        width: 82.1333vw;
        height: 10.6667vw;
        line-height: 10.6667vw;
        border-radius: 5.3333vw;
        background-color: #f71037;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        font-weight: bold;
        font-size: 3.2vw;
        margin-top: 4vw;
        margin-bottom: 6.6667vw;
      }
      .intro_des {
        width: 89.6vw;
        height: 12.8vw;
        font-size: 3.7333vw;
        letter-spacing: 0.2667vw;
        line-height: 6.4vw;
        color: #6c6c6c;
      }
    }
  }
}
</style>