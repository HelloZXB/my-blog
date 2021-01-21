import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Home from '@/views/Layout/Home'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/', // 首页
        component: Home,
        meta: { isKeepAlive: true } // 元信息, 额外的参数
      },
      {
        path: '/archive', // 归档
        component: () => import('@/views/Layout/Archive')
      },
      {
        path: '/image-set', // 相册
        component: () => import('@/views/Layout/ImageSet')
      },
      {
        path: '/leave-message', // 留言
        component: () => import('@/views/Layout/LeaveMessage')
      },
      {
        path: '/neighbor', // 邻居
        component: () => import('@/views/Layout/Neighbor')
      },
      {
        path: '/whispers', // 微语
        component: () => import('@/views/Layout/Whispers')
      },
      {
        path: '/friends-chain', // 友情链接
        component: () => import('@/views/Layout/Composition/FriendsChain')
      },
      {
        path: '/archive-column', // 归档栏
        component: () => import('@/views/Layout/Composition/Page/ArchiveColumn')
      },
      {
        path: '/epidemic', // 实时疫情
        component: () => import('@/views/Layout/Composition/Page/Epidemic')
      },
      {
        path: '/kaleidoscope', // 万花筒
        component: () => import('@/views/Layout/Composition/Page/Kaleidoscope')
      },
      {
        path: '/link-library', // 链接库
        component: () => import('@/views/Layout/Composition/Page/LinkLibrary')
      },
      {
        path: '/message-board', // 留言板
        component: () => import('@/views/Layout/Composition/Page/MessageBoard')
      },
      {
        path: '/time-machine', // 时光机
        component: () => import('@/views/Layout/Composition/Page/TimeMachine')
      },
      {
        path: '/about-me', // 关于我
        component: () => import('@/views/Layout/Composition/Sort/AboutMe')
      },
      {
        path: '/album-pic', // 相册图片
        component: () => import('@/views/Layout/Composition/Sort/AlbumPic')
      },
      {
        path: '/essay', // 生活随笔
        component: () => import('@/views/Layout/Composition/Sort/Essay')
      },
      {
        path: '/java', // Java
        component: () => import('@/views/Layout/Composition/Sort/Share/Java')
      },
      {
        path: '/web', // Web
        component: () => import('@/views/Layout/Composition/Sort/Share/Web')
      },
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
