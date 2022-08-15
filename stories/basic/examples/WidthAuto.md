
```html
<template>
  <div>
    <draggable-resizable-vue
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:active="element.isActive"
      w="auto"
    >
      {{ text }}
    </draggable-resizable-vue>
    <div class="toolbar">Text: <input v-model="text" /></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const text = ref('lorem ipsum dolor sit amet, consectetur adipiscing')

const element = ref({
  x: 20,
  y: 80,
  height: 20,
  isActive: false,
})
</script>

```