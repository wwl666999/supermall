/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 14:31:56
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-13 10:03:45
 */
import axios from 'axios'
//1、创建axios实例
export function request (config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //2、axios拦截器-请求拦截
  instance.interceptors.request.use(config => {
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err)
  })

  //2、响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  //3、发送真正的网络请求
  return instance(config)
}