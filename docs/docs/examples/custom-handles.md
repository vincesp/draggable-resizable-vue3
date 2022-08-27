# Custom handles

<div class="example-container">
  <ClientOnly>  
      <CustomHandles />
  </ClientOnly>
</div>

```vue
<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :handles="['tm', 'bm', 'ml', 'mr']"
  >
    Element
    <template #handle>!</template>
    <template #handle-bm>&</template>
    <template #handle-mr>?</template>
  </draggable-resizable-vue>
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

</script>

```
