<template>
  <!-- 返回顶部 -->
  <div class="go-top">
    <img v-show="goTopShow" @click="goTop" src="https://www.xcnte.com/usr/plugins/GoTop/images/scroll.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'GoTop',
    data () {
      return {
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

<style lang="less">
  @import "src/styles/other/GoTop";
</style>
