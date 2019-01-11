<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-show="$route.meta.showBottomTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar.vue'

export default {
  name: 'app',
  components: {
    TabBar
  },
  mounted() {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
#app {
  width 100%
  height 100%
  background #f5f5f5
}
</style>
