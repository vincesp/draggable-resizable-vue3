<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :grid="grid"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
  </draggable-resizable-vue>

  <div class="toolbar">
  Grid:
  <select style="width:200px" v-model="grid">
  <option :value="[20,20]">[20,20]</option>
  <option :value="[20,80]">[20,80]</option>
  <option :value="[40,40]">[40,40]</option>
  <option :value="[60,80]">[60,80]</option>
</select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: false,
})

const grid =ref([20,20])
</script>