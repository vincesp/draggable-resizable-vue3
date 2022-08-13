import { createApp } from 'vue'
import App from './App.vue'
// import DraggableResizableVue from 'draggable-resizable-vue3'

// optionally import default styles
// import 'draggable-resizable-vue3/dist/DraggableResizableVue3.css'

const app = createApp(App)
// app.component('DraggableResizableVue', DraggableResizableVue)

app.mount('#app')
