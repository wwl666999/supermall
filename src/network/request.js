/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 14:31:56
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-12 18:02:25
 */
import axios from 'axios'
//1、创建axios实例
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2、axios拦截器-请求拦截
  instance.interceptors.request.use(config => {
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