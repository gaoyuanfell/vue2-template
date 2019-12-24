<template>
  <div class="home">
    <Button>123123123123123</Button>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    console.info(this.$store.dispatch('increment'))
  },
  methods: {}
}
</script>

<style scoped lang="less">
.home {
  margin: 10px;
}
</style>
