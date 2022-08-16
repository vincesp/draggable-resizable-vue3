<template>
  <div class="p-4">
    <div
      class="flex mx-auto max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white h-[calc(100vh-2rem)]"
    >
      <div>
        <TheLogo />
        <LeftSidebar />
      </div>

      <div class="relative flex-1">
        <div class="flex w-full bg-blue-900 text-white px-6 py-3 h-14">
          <div
            class="rounded-lg overflow-hidden shadow-sm border border-white/20 flex items-center text-sm"
          >
            <button
              v-for="tab in tabs"
              :key="tab.name"
              class="px-8 py-1 w-36 h-full"
              :class="{
                'bg-blue-600 ': show === tab.name,
              }"
              @click="show = tab.name"
            >
              {{ tab.displayName }}
            </button>
          </div>
        </div>
        <RouterView v-show="show === 'example'" class="overflow-auto" />
        <DocsTab v-show="show === 'docs'" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import TheLogo from './components/TheLogo.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import DocsTab from './components/DocsTab.vue'

const tabs = [
  { name: 'example', displayName: 'Example' },
  { name: 'docs', displayName: 'Docs' },
]

const show = ref('example')
</script>
