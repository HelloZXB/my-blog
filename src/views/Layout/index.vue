<template>
  <div class="layout">
    <home-header/>
    <home-center/>
    <Footer class="layout-footer-center">2021.1-19-2021 &copy; HELLOZXB</Footer>
  </div>
</template>

<script>
  import HomeHeader from '@/components/Layout/HomeHeader'
  import HomeCenter from '@/components/Layout/HomeCenter'

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
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-footer-center{
    text-align: center;
  }
</style>
