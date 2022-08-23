<template>
  <draggable-resizable-container
    :grid="[20, 20]"
    :show-grid="true"
    class="container"
  >
    <draggable-resizable-vue
      v-model:x="elementOne.x"
      v-model:y="elementOne.y"
      v-model:h="elementOne.height"
      v-model:w="elementOne.width"
      v-model:active="elementOne.isActive"
      class="element-one"
      :grid="[80, 80]"
    >
      Draggable and resizable element
    </draggable-resizable-vue>
  </draggable-resizable-container>
</template>

<script setup>
import { ref } from 'vue'
import {
  DraggableResizableVue,
  DraggableResizableContainer,
} from 'draggable-resizable-vue3'

const elementOne = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  zIndex: 2,
  isActive: false,
})
</script>

<style>
.container {
  width: 100%;
  height: 600px;
}
.element-one {
  background-color: blue;
  color: white;
}
</style>
