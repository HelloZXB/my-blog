<template>
  <div class="home-header">
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">B & P</div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Input v-model="value" placeholder="Enter something..." style="width: 200px"/>
          </MenuItem>
          <MenuItem name="2">
            登录
          </MenuItem>
          <MenuItem name="3">
            注册
          </MenuItem>
          <MenuItem name="4">
            管理
          </MenuItem>
          <MenuItem name="5">
            GITHUB
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .home-header {
    .layout-logo {
      width: 100px;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
      text-align: center;
      line-height: 30px;
      font-size: 30px;
      color: rgba(255, 255, 255, .7);
    }

    .layout-nav {
      width: 540px;
      margin: 0 auto;
      margin-right: 20px;
      height: 60px;
    }
  }
</style>
