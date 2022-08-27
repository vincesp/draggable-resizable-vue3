## Introduction

 ![Latest Version on NPM](https://img.shields.io/npm/v/draggable-resizable-vue3.svg?style=flat-square)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
 ![npm](https://img.shields.io/npm/dt/draggable-resizable-vue3.svg?style=flat-square)

This is Vue 3 (Composition API) library for draggable and resizable elements with custom grid. 


 Initially, this is a fork of the Vue 2 library [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable). Now it is being developed independently from the source.



## Features

* Vue 3 (Composition API).
* No dependencies.
* Lightweight (`36.2 KB` without minification).
* Use draggable, resizable or both.
* Define handles for resizing or use borders.
* Restrict size and movement to parent any element.
* Snap element to custom grid.
* Restrict drag to vertical or horizontal axis.
* Maintain aspect ratio.
* Touch enabled.
* Use your own classes.
* Provide your own markup for handles.
* Toggle active state while hovering.
* Showing parent grid using prop or component.
* Styling using slots or custom styles.


## Installation

```bash
$ npm install draggable-resizable-vue3
```

___

Register (`DraggableResizableVue` and `DraggableResizableContainer` components) globally: 

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import DraggableResizableVue from 'draggable-resizable-vue3'

const app = createApp(App)

app.use(DraggableResizableVue)

app.mount('#app')
```

Register locally (composition API):

```vue
<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'
</script>
```

Register locally with the container component:

```vue
<script setup>
import {
  DraggableResizableVue,
  DraggableResizableContainer,
} from 'draggable-resizable-vue3'
</script>
```


## Basic usage

Check an example of this type of usage [here](/docs/examples/basic-props.html).

```vue
<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
  />
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
</script>

```

For advanced usage [check examples](/docs/examples/no-props.html).

