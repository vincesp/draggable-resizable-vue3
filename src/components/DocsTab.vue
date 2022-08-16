<template>
  <div class="text-sm px-8 py-4 overflow-auto scrollbar h-full">
    <Markdown v-if="docs[routePath]" :source="docs[routePath]"></Markdown>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Markdown from 'vue3-markdown-it'
import 'highlight.js/styles/monokai.css'

const docs = ref({})

const route = useRoute()

const routePath = computed(() =>
  route.path.replace(/[0-9]/g, '').replace('/', ''),
)

onMounted(async () => {
  await setDocs()
})

const setDocs = async () => {
  const paths = Object.keys(import.meta.glob('/src/docs/*.md'))
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const fileName = path.split('/').pop().replace('.md', '').toLowerCase()
    console.log(fileName)
    const markdown = await getDoc(path)
    docs.value[fileName] = markdown
  }
}

const getDoc = async (path) => {
  return new Promise((resolve, reject) => {
    const client = new XMLHttpRequest()
    client.onreadystatechange = (evt) => {
      if (
        evt.currentTarget.readyState === 4 &&
        evt.currentTarget.status === 200
      ) {
        try {
          const response = client.responseText
          resolve(response)
        } catch (exception) {
          reject(exception)
        }
      }
    }
    client.open('GET', path, true)
    client.send()
  })
}
</script>
