<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 11:11:28
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-13 18:06:39
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Scroll class="content">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </Scroll>
    <ul>
      <li>qq1</li>
      <li>qq2</li>
      <li>qq3</li>
      <li>qq4</li>
      <li>qq5</li>
      <li>qq6</li>
      <li>qq7</li>
      <li>qq8</li>
      <li>qq9</li>
      <li>qq10</li>
      <li>qq11</li>
      <li>qq12</li>
      <li>qq13</li>
      <li>qq14</li>
      <li>qq15</li>
      <li>qq16</li>
      <li>qq17</li>
      <li>qq18</li>
      <li>qq19</li>
      <li>qq20</li>
      <li>qq21</li>
      <li>qq22</li>
      <li>qq23</li>
      <li>qq24</li>
      <li>qq25</li>
      <li>qq26</li>
      <li>qq27</li>
      <li>qq28</li>
      <li>qq29</li>
      <li>qq30</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll.vue'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import { getHomeMultidata, getHomeGoods } from '../../network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
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
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop'
    };
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  watch: {},
  created () {
    // 1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    /**
     * @description: 网络请求相关方法
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        // this.goods[type].page += 1
        console.log(res)
      })
    }

  }
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
  height: 100vh;
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
  z-index: 9;
  background-color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>