import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/Layout/home/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
        meta: { isKeepAlive: true } // 元信息, 额外的参数
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
