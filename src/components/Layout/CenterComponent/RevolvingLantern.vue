<template>
  <div class="revolving-lantern">
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/433407425.jpg" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2020/07/3934111648.png" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2020/02/1104471124.png" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/10/1556445326.png" alt="">
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
  export default {
    name: 'RevolvingLantern',
    data () {
      return {
        value2: 0
      }
    }
  }
</script>

<style scoped lang="less">
  .revolving-lantern {
    .demo-carousel {
      height: 400px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
