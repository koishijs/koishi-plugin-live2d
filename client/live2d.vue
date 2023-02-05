<template>
  <live2d :style="'position: fixed; bottom: 0.7rem; right: 2.5rem; zIndex: 150'"
    :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']" :direction="direction" :size="size"></live2d>
</template>

<script lang="ts">
import live2d from 'vue-live2d'

export default {
  name: 'App',
  components: {
    live2d
  },
  data() {
    return {
      direction: 'right',
      style: '',
      width: 500,
      height: 500,
      size: 350,
      tips: {
        mouseover: [{
          selector: '.vue-live2d',
          texts: ['欢迎使用 koishi']
        }]
      }
    }
  },
  created() {
    // tips 未使用，可自行在组件绑定此参数，注意此参数只会初始化一次
    this.tips = this.customTips
  }
}
</script>
<style>
  .layout-status {
    z-index: 200 !important;
  }
</style>
