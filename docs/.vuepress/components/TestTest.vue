<template>
    <div>
        {{counter}}
        <button @click="add">Add</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const add = ()=> { counter.value++}

</script>
