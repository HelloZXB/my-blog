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
    <div class="body-art">
      <div class="art-img">
        <img src="https://jerrita.cn/usr/themes/handsome/assets/img/sj/2.jpg" alt="">
      </div>
      <div class="art-txt">
        <div class="txt">狮吼功</div>
      </div>
    </div>
  </div>
</template>

<script>
  import carousel from '@/utils/fakeData/carousel.json'

  export default {
    name: 'Home',
    components: {
      carousel
    },
    data () {
      return {
        carousel: carousel.carousel
      }
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Home/Home";
</style>
