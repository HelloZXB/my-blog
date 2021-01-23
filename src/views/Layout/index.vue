<template>
  <!-- 主页 -->
  <div class="layout" @contextmenu.prevent @keyup="renderKeyDown($event)" tabindex="0">
    <a href="https://github.com/HelloZXB" class="github" target="_blank">
      <img src="../../assets/01.png" alt="">
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
    },
    created () {
      console.log('"今天的不开心就至于此吧, 明天依旧光芒万丈, 宝贝!"')
    },
    methods: {
      show (event) {
        // 此处可以使用判断条件控制是否需要阻止右键
        event.preventDefault()
      },
      renderKeyDown (e) {
        if (e.keyCode === 123) {
          this.$message({
            message: '打开控制台成功, 采用本站CSS和JS请注明来源, 禁止商业使用',
            type: 'warning'
          })
          console.log('打开控制台成功, 采用本站CSS和JS请注明来源, 禁止商业使用')
        }
        // console.log('e.keyCode' + e.keyCode)

        let keyCode = e.keyCode || e.which || e.charCode
        let ctrlKey = e.ctrlKey || e.metaKey
        console.log(e.ctrlKey)
        if (ctrlKey && keyCode == 67) {
          this.$message({
            message: '复制成功, 若要转载请务必保留原文链接',
            type: 'success'
          })
          console.log('复制成功, 若要转载请务必保留原文链接')
        }
        e.preventDefault()
        return false
      }
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Layout";
</style>
