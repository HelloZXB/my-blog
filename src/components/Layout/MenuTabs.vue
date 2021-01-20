<template>
  <div class="menu-tabs">
    <Tabs>
      <TabPane label="最新文章" icon="ios-albums">
        <div class="demo-avatar">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <span class="article-content">TypeScript</span>
        </div>
        <div class="demo-avatar">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <span class="article-content">C++</span>
        </div>
        <div class="demo-avatar">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <span class="article-content">Java</span>
        </div>
      </TabPane>
      <TabPane label="热门评论" icon="ios-at-outline">
        <div class="demo-avatar">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <span class="article-content">asf</span>
        </div>
        <div class="demo-avatar">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <span class="article-content">asf</span>
        </div>
        <div class="demo-avatar">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <span class="article-content">asf</span>
        </div>
      </TabPane>
      <TabPane label="常见bug" icon="ios-bug"></TabPane>
      <TabPane label="github贡献" icon="logo-github"></TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    name: 'MenuTabs'
  }
</script>

<style scoped lang="less">
.menu-tabs{
  .navigation {
    padding: 10px;
    font-size: 16px;
  }

  .demo-avatar {
    padding: 0 20px;

    .article-content {
      /*border: 1px solid #222;*/
      width: 278px;
      height: 70px;
      display: inline-block;
      padding: 0 5px;
    }
  }
}
</style>
