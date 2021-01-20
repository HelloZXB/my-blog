<template>
  <div class="center-content">
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <revolving-lantern/>

      <!-- 大图 -->
      <div class="article">
        <div class="article-img">
          <img src="https://www.xcnte.com/usr/uploads/2020/12/2247044869.png" alt="">
        </div>
        <div class="article-pa">
          <h2>吉他拨弦方法</h2>
          <p>持琴方式翘腿式两腿分开式两个接触点：右腿部右手拨弦方法右手拨弦，左手按弦最粗是6弦，最细是1弦右手小指一般用不到，4根手指需要弹6弦6 5 4弦 用大拇指...</p>
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
          <h2>吉他拨弦方法</h2>
          <p>持琴方式翘腿式两腿分开式两个接触点：右腿部右手拨弦方法右手拨弦，左手按弦最粗是6弦，最细是1弦右手小指一般用不到，4根手指需要弹6弦6 5 4弦 用大拇指...</p>
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
          <img src="https://www.xcnte.com/usr/uploads/2020/12/2247044869.png" alt="">
          <img src="https://www.xcnte.com/usr/uploads/2020/12/2247044869.png" alt="">
          <img src="https://www.xcnte.com/usr/uploads/2020/12/2247044869.png" alt="">
        </div>
        <div class="article-pa">
          <h2>吉他拨弦方法</h2>
          <p>持琴方式翘腿式两腿分开式两个接触点：右腿部右手拨弦方法右手拨弦，左手按弦最粗是6弦，最细是1弦右手小指一般用不到，4根手指需要弹6弦6 5 4弦 用大拇指...</p>
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
          <img src="https://www.xcnte.com/usr/uploads/2020/12/2247044869.png" alt="">
        </div>
        <div class="article-paD">
          <h2>吉他拨弦方法</h2>
          <p>持琴方式翘腿式两腿分开式两个接触点：右腿部右手拨弦方法右手拨弦，左手按弦最粗是6弦，最细是1弦右手小指一般用不到，4根手指需要弹6弦6 5 4弦 用大拇指...</p>
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
