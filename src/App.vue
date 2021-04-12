<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-09 15:33:54
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-12 14:27:40
-->
<template>
  <div id="app">

    <main-tab-bar />

    <router-view />

  </div>
</template>

<script>
import MainTabBar from "./components/content/maintabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
