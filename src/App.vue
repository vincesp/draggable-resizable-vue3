<template>
  <draggable-resizable-container
    :grid="[20, 20]"
    :show-grid="true"
    class="container"
  >
    <draggable-resizable-vue
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:w="element.width"
      v-model:active="element.isActive"
    >
      Draggable and resizable element
    </draggable-resizable-vue>
  </draggable-resizable-container>
</template>

<script setup>
import { ref } from 'vue'
import { DraggableResizableVue, DraggableResizableContainer } from './index'

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: true,
})
</script>
<style>
.container {
  width: 100%;
  height: 500px;
  border: 1px solid black;
  margin: 50px;
}
</style>
