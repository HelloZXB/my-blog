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
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        carousel: [
          {
            id: 1,
            src: 'https://jerrita.cn/usr/uploads/time/5e77474967cc9.jpg'
          },
          {
            id: 2,
            src: 'https://jerrita.cn/usr/themes/handsome/assets/img/sj/4.jpg'
          },
          {
            id: 3,
            src: 'https://jerrita.cn/usr/uploads/time/5e8ae7bd37196.jpg'
          },
          {
            id: 4,
            src: 'https://jerrita.cn/usr/themes/handsome/assets/img/sj/1.jpg'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Home/Home";
</style>
