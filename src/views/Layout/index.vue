<template>
  <!-- 主页 -->
  <div class="layout">
    <el-container class="el-shadow">
      <!-- 头部 -->
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-header>

      <el-container>

        <!-- 侧边栏 -->
        <el-aside>
          <el-row class="tac">
            <el-col :span="12">
              <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-menu-item disabled>
                  <span>导航</span>
                </el-menu-item>
                <el-menu-item index="1">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-edit"></i>
                  <span slot="title">微语</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-picture"></i>
                  <span slot="title">相册</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-takeaway-box"></i>
                  <span slot="title">归档</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-chat-dot-round"></i>
                  <span slot="title">留言</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-s-custom"></i>
                  <span slot="title">邻居</span>
                </el-menu-item>

                <!-- --------------------------------------------- -->

                <el-menu-item disabled>
                  <span>组成</span>
                </el-menu-item>
                <el-submenu index="7">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>分类</span>
                  </template>
                  <el-menu-item-group>
                    <el-submenu index="1-1">
                      <template slot="title">技术分享</template>
                      <el-menu-item index="1-2-1">
                        web前端
                        <span class="bubble">48</span>
                      </el-menu-item>
                      <el-menu-item index="1-3-1">
                        java
                        <span class="bubble">48</span>
                      </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="1-2">
                      生活随笔
                      <span class="bubble">48</span>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                      相册图片
                      <span class="bubble">48</span>
                    </el-menu-item>
                    <el-menu-item index="1-4">
                      关于我
                      <span class="bubble">48</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="8">
                  <template slot="title">
                    <i class="el-icon-document-remove"></i>
                    <span>页面</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">实时疫情</el-menu-item>
                    <el-menu-item index="1-2">归档栏</el-menu-item>
                    <el-menu-item index="1-3">万花筒</el-menu-item>
                    <el-menu-item index="1-4">时光机</el-menu-item>
                    <el-menu-item index="1-5">留言板</el-menu-item>
                    <el-menu-item index="1-6">链接库</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="9">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>友情链接</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">01
                    </el-menu-item>
                    <el-menu-item index="1-2">02</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>

          <!-- 内容区域 -->
          <el-main>Main</el-main>

          <!-- 尾部 -->
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Layout";
</style>
