<template>
  <div class="home-center">
    <Layout>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <home-menu-left/>
        </Sider>
        <Layout :style="{padding: '0 24px 0', marginTop: '64px'}">
          <center-content/>
        </Layout>
        <Sider hide-trigger :style="{background: '#fff', minWidth: '350px'}">
          <home-menu-right/>
        </Sider>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import CenterContent from '../CenterComponent/CenterContent'
  import HomeMenuRight from './HomeMenuRight'
  import HomeMenuLeft from './HomeMenuLeft'

  export default {
    name: 'HomeCenter',
    components: {
      HomeMenuRight,
      CenterContent,
      HomeMenuLeft
    }
  }
</script>

<style scoped lang="less">
  .home-center {

  }
</style>
