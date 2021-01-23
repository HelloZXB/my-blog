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
    <div class="blog-msg">
      <h3>博客信息</h3>
      <ul>
        <li>
          <div>
            <i class="el-icon-files"></i>
            文章总数
          </div>
          <span>343</span>
        </li>
        <li>
          <div>
            <i class="el-icon-chat-round"></i>
            评论总数
          </div>
          <span>34332</span>
        </li>
        <li>
          <div>
            <i class="el-icon-date"></i>
            运行天数
          </div>
          <span>4天3小时</span>
        </li>
        <li>
          <div>
            <i class="el-icon-mouse"></i>
            github天数
          </div>
          <span>325天</span>
        </li>
      </ul>
    </div>
    <div class="go-top">
      <img v-show="goTopShow" @click="goTop" src="https://www.xcnte.com/usr/plugins/GoTop/images/scroll.png" alt="">
    </div>
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
        HomeAsideRight: topComments.article,
        scrollTop: '',
        goTopShow: false
      }
    },
    watch: {
      scrollTop (val) {
        return this.scrollTop > 500 ? this.goTopShow = true : this.goTopShow = false
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      handleScroll () {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || 33
        document.body.scrollTop
        if (this.scrollTop > 500) {
          this.goTopShow = true
        }
      },
      goTop () {
        let timer = null, _that = this
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn () {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 250
            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            _that.goTopShow = false
          }
        })
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/other/HomeAsideRight";
  @import "src/styles/Layout/Layout";
</style>
