<template>
  <div class="right-aside">
    <div class="user">
      <div class="user-pic">
        <img src="../../assets/userPic.jpg" alt="">
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" style="font-weight: 700; font-size: 18px;">
          dawnIceZhu
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" placement="top-end" style="width: 250px; padding: 10px">
          People can skip meals for twelve days. But programming can’t
          stop writing for a day
        </el-dropdown-menu>
      </el-dropdown>
      <span style="padding: 10px 0; font-size: 12px; display: block">
          终其一生, 我们都在寻找自己
      </span>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="热门文章" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="热门评论" name="second">热门评论</el-tab-pane>
      <el-tab-pane label="随机文章" name="third">随机文章</el-tab-pane>
      <el-tab-pane label="github动态" name="fourth">github动态</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  export default {
    name: 'HomeAsideRight',
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/other/HomeAsideRight";
  @import "src/styles/Layout/Layout";
</style>
