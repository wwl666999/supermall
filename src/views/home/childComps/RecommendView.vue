<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 15:48:26
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-12 15:49:21
-->
<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" class="recommend-item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0px 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>