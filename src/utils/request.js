/*
* 封装axios请求
* */
import axios from 'axios'

const request = axios.create({
  // 基准地址
  baseURL: 'http://localhost:8080/#/',
  // 超时， 如果接口超过3000毫秒，直接失败
  timeout: 3000
})

export default request
