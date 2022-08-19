<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :axis="axis"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
  </draggable-resizable-vue>

  <div class="toolbar">
    Axis
    <button @click="axis = 'x'" :class="{ active: axis === 'x' }">X</button>
    <button @click="axis = 'y'" :class="{ active: axis === 'y' }">Y</button>
    <button @click="axis = 'both'" :class="{ active: axis === 'both' }">
      Both
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const axis = ref('x')

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: false,
})
</script>

<style>
.toolbar .active {
  background-color: rgb(47, 71, 160);
}
</style>
