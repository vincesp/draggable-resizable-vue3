<template>
  <div class="bg-blue-800 text-white px-4 w-[250px] py-4 text-sm h-full">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="block px-4 py-3 hover:bg-blue-700 w-full rounded-lg mb-2"
      active-class="bg-white text-gray-800 hover:bg-white font-medium"
    >
      {{ toSentenceCase(route.name) }}
    </router-link>
  </div>
</template>
<script setup>
import routes from '~pages'
console.log(routes)
const toSentenceCase = (camelCase) => {
  if (camelCase) {
    const result = camelCase.replace(/([A-Z])/g, ' $1')
    return result[1].toUpperCase() + result.substring(2).toLowerCase()
  }
  return ''
}
</script>
