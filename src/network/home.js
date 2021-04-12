/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 14:54:10
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-12 18:06:29
 */
import { request } from "./request";

export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

//首页请求商品列表
export function getHomeGoods (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}