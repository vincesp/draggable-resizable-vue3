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
      :handles-size="20"
    >
      Draggable and resizable element
    </draggable-resizable-vue>
    <draggable-resizable-vue
      v-model:x="elementTwo.x"
      v-model:y="elementTwo.y"
      v-model:h="elementTwo.height"
      v-model:w="elementTwo.width"
      v-model:active="elementTwo.isActive"
      :grid="[80, 80]"
      handles-type="borders"
      :active-on-hover="true"
      class="element-two"
    >
      Draggable and resizable element
    </draggable-resizable-vue>
    <draggable-resizable-vue
      v-model:x="elementThree.x"
      v-model:y="elementThree.y"
      v-model:h="elementThree.height"
      v-model:w="elementThree.width"
      v-model:active="elementThree.isActive"
      handles-type="handles"
      class="element-three"
      drag-handle=".drag"
    >
      <template #handle-tl> handle-tl </template>
      <template #handle> handle </template>
      <div class="drag">Drag here</div>
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
  isActive: true,
})

const elementTwo = ref({
  x: 180,
  y: 180,
  width: 100,
  height: 100,
  zIndex: 4,
  isActive: true,
})

const elementThree = ref({
  x: 500,
  y: 100,
  width: 100,
  height: 100,
  zIndex: 4,
  isActive: true,
})
</script>

<style>
* {
  font-family: sans-serif;
}
.container {
  width: 100%;
  height: 600px;
}
.element-one {
  background-color: blue;
  color: white;
}
.element-two {
  background-color: yellow;
}
.element-three {
  background-color: rgb(35, 248, 71);
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
