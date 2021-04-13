<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-13 11:07:44
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-13 14:54:41
-->
<template>
  <div class="goods">
    <good-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" />
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';

export default {
  name: 'GoodsList',
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      defalut () {
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

<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>