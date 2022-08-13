<template>
  <main>
    <div id="top" class="container"></div>
    <div>
      <div style="background: aqua; width: 771px; height: 500px">
        <VueDraggableResizable
          v-model:x="position.x"
          v-model:y="position.y"
          v-model:h="position.h"
          v-model:w="position.w"
          v-model:active="position.active"
          :show-grid="true"
          :grid="[20, 40]"
          :parent="true"
          drag-handle="#handle"
        >
          <div
            id="handle"
            style="background: aqua; width: 100%; height: 20px"
          ></div>
        </VueDraggableResizable>
        <VueDraggableResizable
          v-model:x="position2.x"
          v-model:y="position2.y"
          v-model:h="position2.h"
          v-model:w="position2.w"
          v-model:active="position2.active"
          :parent="true"
          drag-handle="#handle1"
        >
          <div
            id="handle1"
            style="background: aqua; width: 100%; height: 20px"
          ></div>
        </VueDraggableResizable>
      </div>

      <!-- <VueDraggableResizable> asdsadsad </VueDraggableResizable> -->
    </div>
  </main>
</template>

<script setup>
import VueDraggableResizable from './index'
import './components/draggable-resizable-vue3/DraggableResizableVue3.css'
import { ref } from 'vue'

const position = ref({ x: 100, y: 100, w: 100, h: 100, active: true })
const position2 = ref({ x: 100, y: 100, w: 100, h: 100, active: true })
</script>
