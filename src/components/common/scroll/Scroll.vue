<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-13 16:39:12
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-13 17:38:31
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
import ObserveDom from '@better-scroll/observe-dom'
BScroll.use(ObserveDom)

BScroll.use(Pullup)
export default {
  name: 'Scroll',
  components: {},
  props: {},
  data () {
    return {
      scroll: null
    };
  },
  computed: {},
  mounted () {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      // probeType: this.probeType,
      // pullUpLoad: this.pullUpLoad,
      observeDom: true
    })
  },
  watch: {},
  created () { },
  methods: {}
};
</script>

<style  scoped></style>