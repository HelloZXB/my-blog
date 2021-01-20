<template>
  <div class="center-content">
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <revolving-lantern/>

      <!-- 大图 -->
      <div class="article">
        <div class="article-img">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2018/12/3062068819.png" alt="">
        </div>
        <div class="article-pa">
          <h2>RSS的简单使用指南</h2>
          <p>
            RSS 的优势在于简单且强大。订阅自己想看的，而非算法推荐，对于希望掌控自己时间，而
            非让繁多的无意义但有趣的信息填满生活，这很重要。为了不浪费时间，而卸载...
          </p>
          <div class="features">
          <span>
            <Icon type="ios-person"/>
            HELLOZXB
          </span>
            <span>
            <Icon type="ios-time-outline"/>
            2021.01.20
          </span>
            <span>
            <Icon type="md-eye"/>
            3234 浏览
          </span>
            <span>
            <Icon type="ios-thumbs-up-outline"/>
            1285 点赞
          </span>
            <span>
            <Icon type="ios-chatbubbles-outline"/>
            918 评论
          </span>
          </div>
        </div>
      </div>

      <!-- 无图 -->
      <div class="article">
        <div class="article-pa">
          <h2>安卓错误：android.content.res.Resources$NotFoundException 解决方法</h2>
          <p>expobjStar组件在之前已经绑定了，可是却又找不到ID，错误原因是setText()后面的值是int型的数字，所以，编译的时候会把这个数字当做id寻找组件，解决方法是，把数字转换成string
            字符串类型就行，直接在后面+ ""</p>
          <div class="features">
          <span>
            <Icon type="ios-person"/>
            HELLOZXB
          </span>
            <span>
            <Icon type="ios-time-outline"/>
            2021.01.20
          </span>
            <span>
            <Icon type="md-eye"/>
            3234 浏览
          </span>
            <span>
            <Icon type="ios-thumbs-up-outline"/>
            1285 点赞
          </span>
            <span>
            <Icon type="ios-chatbubbles-outline"/>
            918 评论
          </span>
          </div>
        </div>
      </div>

      <!-- 三图 -->
      <div class="article">
        <div class="article-img3">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2018/09/2073217848.jpg" alt="">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2018/07/670035720.jpg" alt="">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/themes/handsome/assets/img/sj/7.jpg" alt="">
        </div>

        <div class="article-pa">
          <h2>如果你知道你所向往的……</h2>
          <p> 纵然从命运的起点回到原点，仍然一无所有。这是命运，是人生，绝不能埋怨任何事物。剧情还在上演，演完自己的人生戏剧，是离不开自己作为主角的唯一法则，这是成功以及失败者必须面对的事实。</p>
          <div class="features">
          <span>
            <Icon type="ios-person"/>
            HELLOZXB
          </span>
            <span>
            <Icon type="ios-time-outline"/>
            2021.01.20
          </span>
            <span>
            <Icon type="md-eye"/>
            3234 浏览
          </span>
            <span>
            <Icon type="ios-thumbs-up-outline"/>
            1285 点赞
          </span>
            <span>
            <Icon type="ios-chatbubbles-outline"/>
            918 评论
          </span>
          </div>
        </div>
      </div>

      <!-- 小图 -->
      <div class="article">
        <div class="article-imgD">
          <img src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2018/11/2975346373.jpg" alt="">
        </div>
        <div class="article-paD">
          <h2>KMP 算法的理解</h2>
          <p>关于字符串的子串模式匹配算法，最经典最简单的的算法是BP算法（Brude-Force）。BP 算法首先我...</p>
          <div class="features">
          <span>
            <Icon type="ios-person"/>
            HELLOZXB
          </span>
            <span>
            <Icon type="ios-time-outline"/>
            2021.01.20
          </span>
            <span>
            <Icon type="md-eye"/>
            3234 浏览
          </span>
            <span>
            <Icon type="ios-thumbs-up-outline"/>
            1285 点赞
          </span>
            <span>
            <Icon type="ios-chatbubbles-outline"/>
            918 评论
          </span>
          </div>
        </div>
      </div>
    </Content>
  </div>
</template>

<script>
  import RevolvingLantern from './RevolvingLantern'

  export default {
    name: 'CenterContent',
    components: { RevolvingLantern }
  }
</script>

<style scoped lang="less">
  @import "src/styles/ConterContent";
</style>
