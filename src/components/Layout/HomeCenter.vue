<template>
  <div class="home-center">
    <Layout>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <home-menu-left/>
        </Sider>
        <Layout :style="{padding: '0 24px 0'}">
          <open-breadcrumb/>
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
  import CenterContent from '@/components/Layout/CenterContent'
  import OpenBreadcrumb from './OpenBreadcrumb'
  import HomeMenuLeft from './HomeMenuLeft'
  import HomeMenuRight from './HomeMenuRight'

  export default {
    name: 'HomeCenter',
    components: {
      HomeMenuRight,
      HomeMenuLeft,
      OpenBreadcrumb,
      CenterContent
    }
  }
</script>

<style scoped lang="less">
  .home-center {

  }
</style>
