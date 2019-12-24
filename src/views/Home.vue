<template>
  <div class="home">
    <Button @click="add()">增加{{ getCount }}</Button>
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
  },
  methods: {
    add() {
      this.$store.commit('increment', 1)
      this.$store.dispatch('increment', 1)
    }
  }
}
</script>

<style scoped lang="less">
.home {
  margin: 10px;
}
</style>
