<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :lock-aspect-ratio="true"
  >
    <img
      class="image"
      src="https://unsplash.com/photos/KjBH8dJYcfQ/download?ixid=MnwxMjA3fDB8MXxhbGx8MjN8fHx8fHwyfHwxNjYwNDg1NjEz&force=true&w=640"
    />
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 80,
  width: 640,
  height: 426,
  isActive: false,
})
</script>

<style>
.image {
  width: 100%;
  height: 100%;
}
</style>
