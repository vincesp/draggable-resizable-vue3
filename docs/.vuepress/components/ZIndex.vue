<template>
  <draggable-resizable-vue
    class="element"
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :z="element.zIndex"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}<br />
    zIndex={{ element.zIndex }}
  </draggable-resizable-vue>
  <draggable-resizable-vue
    class="element2"
    v-model:x="element2.x"
    v-model:y="element2.y"
    v-model:h="element2.height"
    v-model:w="element2.width"
    v-model:active="element2.isActive"
    :z="element2.zIndex"
  >
    x={{ element2.x }}<br />
    y={{ element2.y }}<br />
    height={{ element2.height }}<br />
    width={{ element2.width }}<br />
    isActive={{ element2.isActive }}<br />
    zIndex={{ element2.zIndex }}
  </draggable-resizable-vue>
  <div class="toolbar">
    zIndex first element:
    <input type="number" v-model="element.zIndex" /> zIndex second element:
    <input type="number" v-model="element2.zIndex" />
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
  zIndex: 2,
})

const element2 = ref({
  x: 100,
  y: 100,
  width: 200,
  height: 200,
  isActive: false,
  zIndex: 1,
})
</script>

<style>
.element {
  background-color: blue;
}
.element2 {
  background-color: yellow;
}
</style>
