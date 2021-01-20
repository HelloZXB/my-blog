<template>
  <div class="home-menu-right">
    <Menu active-name="1-1" theme="light" width="auto">
      <menu-tabs/>
      <menu-msg/>
      <menu-label/>
    </Menu>
  </div>
</template>

<script>
  import MenuTabs from './MenuTabs'
  import MenuMsg from './MenuMsg'
  import MenuLabel from './MenuLabel'

  export default {
    name: 'HomeMenuRight',
    components: {
      MenuMsg,
      MenuTabs,
      MenuLabel
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .home-menu-right {

  }
</style>
