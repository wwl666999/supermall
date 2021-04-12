<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 11:11:28
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-12 17:52:32
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" />
    <ul>
      <li>c</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import { getHomeMultidata, getHomeGoods } from '../../network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  props: {},
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'news': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      }
    };
  },
  computed: {},
  watch: {},
  created () {
    // 1.请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods()
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        console.log(res.data, '请求结果')
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods () {
      getHomeGoods().then(res => {
        console.log(res, 'mok')
      })
    }

  }
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: #ff8198;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>