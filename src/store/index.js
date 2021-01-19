import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    cards: [],
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addCards(state, obj) {
      var flag = false;
      if (obj.shoppinged) {
        state.cards.some((item, i) => {
          if (item.id === obj.id) {
            flag = true;
            return true
          }
        })
      } else {
        state.cards.some((item, i) => {
          if (item.id === obj.id) {
            flag = true;
            state.cards.splice(i, 1)
            return true
          }
        })
      }
      if (!flag) {
        state.cards.push(obj);
      }

    },
    clearCards(state) {
      state.cards = []
    }
  }
})

export default store;
