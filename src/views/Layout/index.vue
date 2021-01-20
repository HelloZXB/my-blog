<template>
  <div class="layout">
    <home-header/>
    <home-center/>
    <Footer class="layout-footer-center">2021.1-19-2021 &copy; HELLOZXB</Footer>
  </div>
</template>

<script>
  import HomeHeader from '@/components/Layout/HomeComponent/HomeHeader'
  import HomeCenter from '@/components/Layout/HomeComponent/HomeCenter'

  export default {
    name: 'index',
    components: {
      HomeCenter,
      HomeHeader
    },
    data () {
      return {
        mode: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .layout {
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
