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
  .center-content {
    .article {
      width: 890px;
      margin-top: 30px;
      border-radius: 6px;
      box-shadow: 1px 1px 5px 5px rgb(169 169 169 / 35%);

      .article-pa {
        padding: 0 10px;
      }

      .article-img {
        img {
          width: 100%;
          height: 100%;
        }
      }

      h2 {
        font-weight: 600;
        color: #777;
        padding: 10px 0;
      }

      p {
        width: 100%;
        height: 50px;
        display: block;
        line-height: 25px;
      }

      .features {
        border-top: 1px solid #ccc;
        margin-top: 10px;
        padding: 10px 0;

        span {
          padding: 0 10px;
        }
      }
    }
  }
</style>
