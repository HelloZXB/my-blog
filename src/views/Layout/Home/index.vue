<template>
  <!-- 首页 -->
  <div class="home">
    <el-carousel height="300px">
      <el-carousel-item v-for="(item, index) in carousel" :key="index">
        <h3 class="small">
          <img :src="item.src" alt="">
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="body-art" v-for="(item, index) in bodyArt" :key="index">
      <div class="art-img">
        <img :src="item.pic" alt="">
      </div>
      <div class="art-txt">
        <div class="txt">
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.mainContent }}
          </p>
        </div>
        <div class="home-features">
          <span>
            <i class="el-icon-user">dawnIceZhu</i>
          </span>
          <span>
            <i class="el-icon-time">2020.01.23</i>
          </span>
          <span>
            <i class="el-icon-goblet-square-full">{{ item.cheers }}</i>
          </span>
          <span>
            <i class="el-icon-chat-round">{{ item.comment }}</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import carousel from '@/utils/fakeData/carousel.json'
  import bodyArt from '@/utils/fakeData/bodyArt.json'

  export default {
    name: 'Home',
    components: {
      carousel,
      bodyArt
    },
    data () {
      return {
        carousel: carousel.carousel,
        bodyArt: bodyArt.content
      }
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Home/Home";
</style>
