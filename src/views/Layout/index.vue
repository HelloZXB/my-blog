<template>
  <!-- 主页 -->
  <div class="layout">
    <el-container class="el-shadow">
      <!-- 头部 -->
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-header>

      <el-container>

        <!-- 侧边栏 -->
        <el-aside>
        </el-aside>
        <el-container>

          <!-- 内容区域 -->
          <el-main>Main</el-main>

          <!-- 尾部 -->
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Layout'
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Layout";
</style>
