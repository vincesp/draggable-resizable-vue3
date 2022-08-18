<template>
  <draggable-resizable-vue
    v-model:x="elementOne.x"
    v-model:y="elementOne.y"
    v-model:h="elementOne.height"
    v-model:w="elementOne.width"
    v-model:active="elementOne.isActive"
    class="element-one"
    :resizable="false"
  >
    Draggable and resizable element
  </draggable-resizable-vue>
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
  isActive: true,
})
</script>
<style>
* {
  font-family: sans-serif;
}
.container {
  width: 1000px;
  height: 500px;
  border: 1px solid black;
  margin: 50px auto;
}
.element-one {
  background-color: blue;
  color: white;
}
.element-two {
  background-color: yellow;
}
.drag {
  cursor: grab;
  height: 20px;
  width: 80%;
  text-align: center;
  border: 1px solid black;
  margin: 5px;
}
</style>
