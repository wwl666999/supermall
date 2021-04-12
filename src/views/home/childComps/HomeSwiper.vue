<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 15:35:34
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-12 15:44:15
-->
<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper';
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue';
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () { },
  methods: {}
};
</script>

<style  scoped></style>