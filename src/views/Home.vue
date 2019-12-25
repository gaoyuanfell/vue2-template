<template>
  <div class="home">
    <Button @click="add()">增加{{ getCount }}</Button>
    <DatePicker type="daterange" format="yyyy-MM-dd" placeholder="请选择" @on-change="change($event)"></DatePicker>
    <router-link :to="{ path: '/login' }">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    getCount() {
      return this.$store.getters.getCount
    }
  },
  mounted() {
    console.info(this.$store.state.count)
    this.$store.commit('user/setUserInfo', { name: '张三' })
  },
  methods: {
    add() {
      this.$store.commit('increment', 1)
      this.$store.dispatch('increment', 1)
    },
    change(result) {
      console.info(result)
    }
  }
}
</script>

<style scoped lang="less">
.home {
  margin: 10px;
}
</style>
