<template>
  <div class="home-menu-right">
    <Menu active-name="1-1" theme="light" width="auto">
      <Sider :style="{position: 'fixed', height: '100vh', right: 0, overflow: 'auto', minWidth: '350px'}">
        <menu-tabs/>
        <menu-msg/>
        <menu-label/>
      </Sider>
    </Menu>
  </div>
</template>

<script>
  import MenuTabs from '../MenuComponent/MenuTabs'
  import MenuMsg from '../MenuComponent/MenuMsg'
  import MenuLabel from '../MenuComponent/MenuLabel'

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
