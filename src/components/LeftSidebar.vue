<template>
  <div class="border-r h-screen bg-blue-100 p-2">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="block px-4 py-2 hover:bg-slate-200 w-full rounded-lg border mb-2"
      active-class="bg-slate-300"
    >
      {{ toSentenceCase(route.name) }}
    </router-link>
  </div>
</template>
<script setup>
import routes from '~pages'

const toSentenceCase = (camelCase) => {
  if (camelCase) {
    const result = camelCase.replace(/([A-Z])/g, ' $1')
    return result[1].toUpperCase() + result.substring(2).toLowerCase()
  }
  return ''
}
</script>
