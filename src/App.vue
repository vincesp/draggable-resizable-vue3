<template>
  <main>
    <div id="top" class="container"></div>
    <div>
      <div style="background: aqua; width: 771px; height: 500px">
        <VueDraggableResizable>
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
          :scale="0.3"
          :active-on-hover="true"
          :show-grid="true"
          :grid="[20, 20]"
          :parent="true"
          resize-handles-type="borders"
          :handles-size="6"
        >
          <div
            id="handle"
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
// import './components/draggable-resizable-vue3/DraggableResizableVue3.css'
import { ref } from 'vue'

const position = ref({ x: 100, y: 100, w: 100, h: 100, active: false })
const position2 = ref({ x: 300, y: 300, w: 100, h: 100, active: true })
</script>
