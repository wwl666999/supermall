<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 13:56:21
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-12 14:16:41
-->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">
      </slot>
    </div>
    <div class="center">
      <slot name="center">
      </slot>
    </div>
    <div class="right">
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
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
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(150, 150, 150, 0.08);
}
.left,
.right {
  width: 50px;
}
.center {
  flex: 1;
}
</style>