<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:w="element.w"
    v-model:h="element.h"
    v-model:active="element.isActive"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  height: 'auto',
  width: 'auto',
  isActive: false,
})
</script>

<style>
.container {
  width: 100%;
  min-width: 600px;
  min-height: 400px;
}
</style>
