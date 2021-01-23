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
      <el-tab-pane label="热门文章" name="first">
        <div v-for="(item, index) in HomeAsideRight" :key="index">
          <div class="img-pic">
            <el-avatar :src="item.avatar"></el-avatar>
          </div>
          <div class="img-content">
            <div class="min-bd">
              {{ item.content }}
            </div>
            <div class="features">
              <i class="el-icon-goblet-square-full" style="padding-left: 0;">{{ item.link }}</i>
              <i class="el-icon-chat-round">{{ item.comment }}</i>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="热门评论" name="second">
        <div class="img-pic">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="img-content">
          <div class="min-bd">
            搞笑
          </div>
          <div class="features">
            <i class="el-icon-goblet-square-full" style="padding-left: 0;">443</i>
            <i class="el-icon-chat-round">24</i>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="随机文章" name="third">随机文章</el-tab-pane>
      <el-tab-pane label="github动态" name="fourth">github动态</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import topComments from '@/utils/fakeData/topComments.json'

  export default {
    name: 'HomeAsideRight',
    components: {
      topComments
    },
    data () {
      return {
        activeName: 'first',
        HomeAsideRight: topComments.article
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
