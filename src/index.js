import DraggableResizableVue from './components/draggable-resizable-vue3/DraggableResizableVue3.vue'
import DraggableResizableContainer from './components/draggable-resizable-vue3/DraggableResizableContainer.vue'

export { DraggableResizableVue, DraggableResizableContainer }

DraggableResizableVue.install = (app) => {
  app.component('DraggableResizableContainer', DraggableResizableVue)
  app.component('DraggableResizableContainer', DraggableResizableContainer)
  return app
}

export default DraggableResizableVue
