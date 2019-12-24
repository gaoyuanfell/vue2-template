import Vue from 'vue'
import Vuex from 'vuex'

import system from './system'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  mutations: {
    increment(state, payload) {
      state.count += payload
    }
  },
  actions: {
    increment(context, products) {
      setTimeout(() => {
        context.commit('increment', products)
      }, 1000)
    }
  },
  modules: {
    system,
    user
  }
})
