<template>
  <main>
    <div id="top" class="container"></div>
    <div style="background: aqua; width: 771px; height: 500px">
      <VueDraggableResizable
        v-model:x="position.x"
        v-model:y="position.y"
        v-model:h="position.h"
        v-model:w="position.w"
        v-model:active="position.active"
        :show-grid="true"
        :grid="[20, 20]"
        :parent="true"
        drag-handle="#handle"
      >
        <div
          id="handle"
          style="background: aqua; width: 100%; height: 20px"
        ></div>
      </VueDraggableResizable>
      <!-- <VueDraggableResizable> asdsadsad </VueDraggableResizable> -->
    </div>
  </main>
</template>

<script setup>
import VueDraggableResizable from './components/draggable-resizable-vue3/draggable-resizable-vue3.vue'
import './components/draggable-resizable-vue3/draggable-resizable-vue3.css'
import { ref } from 'vue'

const position = ref({ x: 100, y: 100, w: 100, h: 100, active: true })
</script>
