import DraggableResizableVue from './components/draggable-resizable-vue3/DraggableResizableVue3.vue'

export { DraggableResizableVue }

DraggableResizableVue.install = (app) => {
  app.component(DraggableResizableVue.name, DraggableResizableVue)
  //   app.component(DraggableContainer.name, DraggableContainer)
  return app
}

export { default as DraggableContainer } from './components/DraggableContainer'
export default DraggableResizableVue
