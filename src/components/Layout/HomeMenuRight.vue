<template>
  <div class="home-menu-right">
    <Menu active-name="1-1" theme="light" width="auto">
      <menu-tabs/>
      11
    </Menu>
  </div>
</template>

<script>
  import MenuTabs from './MenuTabs'

  export default {
    name: 'HomeMenuRight',
    components: { MenuTabs },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .home-menu-right {
    .ivu-avatar {
      margin-top: 32px;
    }

    .navigation {
      padding: 10px;
      font-size: 16px;
    }

    .demo-avatar {
      padding: 0 20px;

      .article-content {
        /*border: 1px solid #222;*/
        width: 278px;
        height: 70px;
        display: inline-block;
        padding: 0 5px;
      }
    }
  }
</style>
