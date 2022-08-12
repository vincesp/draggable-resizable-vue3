<template>
  <main>
    <div style="background: aqua; width: 771px; height: 500px">
      <!-- <VueDraggableResizable
        v-model:x="position.x"
        v-model:y="position.y"
        v-model:h="position.h"
        v-model:w="position.w"
        v-model:active="position.active"
        :grid="[1, 1]"
        :parent="true"
      /> -->
      <VueDraggableResizable />
    </div>
  </main>
</template>

<script setup>
import VueDraggableResizable from './components/vue3-draggable-resizable-div/vue-draggable-resizable.vue'
import './components/vue3-draggable-resizable-div/vue-draggable-resizable.css'
import { ref } from 'vue'

const position = ref({ x: 100, y: 100, w: 100, h: 100, active: true })
</script>
