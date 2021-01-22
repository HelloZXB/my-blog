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
  </div>
</template>

<script>

  export default {
    name: 'HomeAsideRight',
  }
</script>

<style scoped lang="less">
  @import "src/styles/other/HomeAsideRight";
  @import "src/styles/Layout/Layout";
</style>
