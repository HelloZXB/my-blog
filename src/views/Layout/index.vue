<template>
  <!-- 主页 -->
  <div class="layout">
    <a href="https://github.com/HelloZXB" class="github" target="_blank">
      <img src="../../assets/02.png" alt="">
    </a>
    <el-container class="el-shadow">

      <!-- 头部 -->
      <home-header/>
      <el-container>
        <!-- 侧边栏 -->
        <home-aside-left/>
        <el-container>
          <!-- 内容区域 -->
          <el-main>
            <home-main/>
          </el-main>
          <!-- 尾部 -->
          <el-footer>
            <home-footer/>
          </el-footer>
        </el-container>
        <home-aside-right/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import HomeHeader from '@/components/Layout/HomeHeader'
  import HomeAsideLeft from '@/components/Layout/HomeAsideLeft'
  import HomeFooter from '@/components/Layout/HomeFooter'
  import HomeAsideRight from '@/components/Layout/HomeAsideRight'
  import HomeMain from '@/components/Layout/HomeMain'

  export default {
    name: 'Layout',
    components: {
      HomeMain,
      HomeAsideRight,
      HomeFooter,
      HomeAsideLeft,
      HomeHeader
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Layout";
</style>
