<template>
  <div style="width:600px;height:300px;border:1px solid black; margin: 20px;">
    <draggable-resizable-vue
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:w="element.width"
      v-model:active="element.isActive"
      :parent="true"
    >
      x={{ element.x }}<br />
      y={{ element.y }}<br />
      height={{ element.height }}<br />
      width={{ element.width }}<br />
      isActive={{ element.isActive }}
    </draggable-resizable-vue>
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

</script>
