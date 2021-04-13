<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 10:42:41
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-13 14:58:04
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 3px 10px rgba(100, 100, 100, 0.2);
}
</style>


