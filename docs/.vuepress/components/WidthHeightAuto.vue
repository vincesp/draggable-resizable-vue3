<template>
  <div>
    <draggable-resizable-vue
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:active="element.isActive"
      w="auto"
      h="auto"
    >
      {{ text }}
    </draggable-resizable-vue>
    <div class="toolbar">Text: <input v-model="text" /></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const text = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)

const element = ref({
  x: 0,
  y: 80,
  height: 20,
  isActive: false,
})
</script>
