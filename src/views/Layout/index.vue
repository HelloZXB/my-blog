<template>
  <!-- 主页 -->
  <div class="layout">
    <el-container class="el-shadow">
      <!-- 头部 -->
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple" style="margin-top: 11px;">
              <span>HELLOZXB</span>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <el-col :span="8" style="margin-top: 11px;">
                <el-input size="large" placeholder="请输入内容" v-model="input" clearable></el-input>
              </el-col>
              <el-col :span="15">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                         @select="handleSelect">
                  <el-menu-item index="1">登陆</el-menu-item>
                  <el-menu-item index="2">注册</el-menu-item>
                  <el-menu-item index="3">管理</el-menu-item>
                  <el-menu-item index="4">GITHUB</el-menu-item>
                  <el-submenu index="5">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    <el-submenu index="5-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="5-4-1">选项1</el-menu-item>
                      <el-menu-item index="5-4-2">选项2</el-menu-item>
                      <el-menu-item index="5-4-3">选项3</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="6">
                    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                    主题切换
                  </el-menu-item>
                </el-menu>
              </el-col>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>

        <!-- 侧边栏 -->
        <el-aside>
          <el-row class="tac">
            <el-col :span="12">
              <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen"
                       @close="handleClose" router>
                <el-menu-item disabled>
                  <span>导航</span>
                </el-menu-item>
                <el-menu-item index="/">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/whispers">
                  <i class="el-icon-edit"></i>
                  <span slot="title">微语</span>
                </el-menu-item>
                <el-menu-item index="/image-set">
                  <i class="el-icon-picture"></i>
                  <span slot="title">相册</span>
                </el-menu-item>
                <el-menu-item index="/archive">
                  <i class="el-icon-takeaway-box"></i>
                  <span slot="title">归档</span>
                </el-menu-item>
                <el-menu-item index="/leave-message">
                  <i class="el-icon-chat-dot-round"></i>
                  <span slot="title">留言</span>
                </el-menu-item>
                <el-menu-item index="/neighbor">
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
                      <el-menu-item index="/web">
                        web前端
                        <span class="bubble">48</span>
                      </el-menu-item>
                      <el-menu-item index="/java">
                        java
                        <span class="bubble">48</span>
                      </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/essay">
                      生活随笔
                      <span class="bubble">48</span>
                    </el-menu-item>
                    <el-menu-item index="/album-pic">
                      相册图片
                      <span class="bubble">48</span>
                    </el-menu-item>
                    <el-menu-item index="/about-me">
                      关于我
                      <span class="bubble">48</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu>
                  <template slot="title">
                    <i class="el-icon-document-remove"></i>
                    <span>页面</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/epidemic">实时疫情</el-menu-item>
                    <el-menu-item index="/archive-column">归档栏</el-menu-item>
                    <el-menu-item index="/kaleidoscope">万花筒</el-menu-item>
                    <el-menu-item index="/time-machine">时光机</el-menu-item>
                    <el-menu-item index="/message-board">留言板</el-menu-item>
                    <el-menu-item index="/link-library">链接库</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="9">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>友情链接</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">01</el-menu-item>
                    <el-menu-item index="1-2">02</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>

          <!-- 内容区域 -->
          <el-main>
            <router-view/>
          </el-main>

          <!-- 尾部 -->
          <el-footer>Footer</el-footer>
        </el-container>

        <div class="right-aside">

        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    data () {
      return {
        input: '',
        activeIndex: '1',
        activeIndex2: '1',
        value: true
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "src/styles/Layout/Layout";
</style>
