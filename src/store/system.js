import * as system from '../api/system'

export default {
  namespaced: true,
  state: {
    menu: [],
    router: []
  },
  mutations: {
    addRouter(state, payload) {
      state.router = payload
    }
  },
  actions: {
    addRouter(context) {
      system.getMenuList().then(res => {
        if (res.isSuccess) {
          context.commit('addRouter', res.data)
        }
      })
    }
  },
  getters: {
    getRouter: state => state.router
  }
}
