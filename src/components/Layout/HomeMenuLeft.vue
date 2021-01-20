<template>
  <div class="home-menu-left">
    <Menu active-name="1-1" theme="light" width="auto">
      <div class="navigation">
        <span>导航</span>
      </div>
      <MenuItem name="1-1">
        <Icon type="ios-navigate"></Icon>
        <span>首页</span>
      </MenuItem>
      <MenuItem name="1-2">
        <Icon type="ios-navigate"></Icon>
        <span>微语</span>
      </MenuItem>
      <MenuItem name="1-3">
        <Icon type="ios-navigate"></Icon>
        <span>相册</span>
      </MenuItem>
      <MenuItem name="1-4">
        <Icon type="ios-navigate"></Icon>
        <span>归档</span>
      </MenuItem>
      <MenuItem name="1-5">
        <Icon type="ios-navigate"></Icon>
        <span>留言</span>
      </MenuItem>
      <MenuItem name="1-6">
        <Icon type="ios-navigate"></Icon>
        <span>邻居</span>
      </MenuItem>
      <div class="navigation">
        <span>组成</span>
      </div>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          分类
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          站点
        </template>
        <MenuItem name="2-1">Option 1</MenuItem>
        <MenuItem name="2-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          页面
        </template>
        <MenuItem name="3-1">Option 1</MenuItem>
        <MenuItem name="3-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          友链
        </template>
        <MenuItem name="4-1">Option 1</MenuItem>
        <MenuItem name="4-2">Option 2</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'HomeMenu'
  }
</script>

<style scoped lang="less">
  .home-menu-left {
    .navigation {
      padding: 10px;
      font-size: 16px;
    }
  }
</style>
