<template>
  <div class="home-menu-left">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
        <div class="demo-avatar">
          <Avatar icon="ios-person" size="100" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <Dropdown>
            <a href="javascript:void(0)">
              HELLOZXB
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list" :style="{padding: '10px'}">
              People can skip meals for twelve days. But programming can’t stop writing for a day
            </DropdownMenu>
          </Dropdown>
        </div>
        <div class="navigation">
          <span>导航</span>
        </div>
        <MenuItem name="1-1">
          <Icon type="ios-navigate"></Icon>
          <span>Option 1</span>
        </MenuItem>
        <MenuItem name="1-2">
          <Icon type="ios-search"></Icon>
          <span>Option 2</span>
        </MenuItem>
        <MenuItem name="1-3">
          <Icon type="ios-settings"></Icon>
          <span>Option 3</span>
        </MenuItem>
        <MenuItem name="1-4">
          <Icon type="ios-settings"></Icon>
          <span>Option 3</span>
        </MenuItem>
        <MenuItem name="1-5">
          <Icon type="ios-settings"></Icon>
          <span>Option 3</span>
        </MenuItem>
        <div class="navigation">
          <span>分类</span>
        </div>
        <Submenu name="6">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </template>
          <MenuItem name="6-1">Option 1</MenuItem>
          <MenuItem name="6-2">Option 2</MenuItem>
          <MenuItem name="6-3">Option 3</MenuItem>
        </Submenu>
        <Submenu name="7">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="7-1">Option 1</MenuItem>
          <MenuItem name="7-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="8">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="8-1">Option 1</MenuItem>
          <MenuItem name="8-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
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

    .ivu-dropdown {
      margin-top: 10px;
      margin-left: 10px;

      a {
        color: #777;
      }
    }

    .demo-avatar {
      width: 100px;
      margin: 30px auto;
    }

    .layout {
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
    }

    .layout-header-bar {
      background: #fff;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }
  }

  .ivu-layout-sider-children {
    margin-top: 64px;
  }
</style>
