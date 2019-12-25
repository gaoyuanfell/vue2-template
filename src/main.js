import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './view-design'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  watch: {
    getRouter(result) {
      console.info(result)
      const list = [
        {
          name: 'User',
          path: '/user'
        },
        {
          name: 'User',
          path: '/user'
        }
      ]

      setTimeout(() => {
        router.addRoutes(
          list.map(item => {
            return {
              path: item.path,
              component: () => import(`./views/${item.name}.vue`)
            }
          })
        )
      }, 1000000000)
    }
  },
  computed: {
    getRouter() {
      return this.$store.getters['system/getRouter']
    }
  },
  mounted() {
    // router.addRoutes([
    //   {
    //     path: '/user',
    //     component: () => import(/* user */ './views/User.vue')
    //   },
    //   {
    //     path: '/about',
    //     component: () => import(/* about */ './views/About.vue')
    //   }
    // ])
  }
}).$mount('#app')
