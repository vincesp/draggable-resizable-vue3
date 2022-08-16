var t=Object.freeze,h=Object.defineProperty;var i=(e,m)=>t(h(e,"raw",{value:t(m||e.slice())}));var l;""(l||(l=i([`html
<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :min-width="150"
    :min-height="150"
    :max-width="300"
    :max-height="300"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
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
<\/script>

`])))``;
