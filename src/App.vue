<template>
  <TheHeader />

  <div class="flex">
    <LeftSidebar class="w-52" />
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import LeftSidebar from './components/LeftSidebar.vue'
</script>
