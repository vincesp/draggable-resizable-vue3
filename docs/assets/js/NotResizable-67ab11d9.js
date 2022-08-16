var l=Object.freeze,m=Object.defineProperty;var t=(e,i)=>l(m(e,"raw",{value:l(i||e.slice())}));var a;""(a||(a=t([`html
<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :resizable="false"
  >
   Not draggable
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
