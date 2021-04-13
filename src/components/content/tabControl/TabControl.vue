<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: Wuwenlong
 * @Date: 2021-04-12 16:18:05
 * @LastEditors: Wuwenlong
 * @LastEditTime: 2021-04-13 14:06:06
-->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active: index === currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  components: {},
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    };
  },
  computed: {},
  watch: {},
  created () { },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
}
.tab-control-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.active {
  color: #ff5777;
}
.active span {
  border-bottom: 3px solid #ff8198;
}
</style>