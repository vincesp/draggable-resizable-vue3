import DraggableResizableVue from '../src/components/draggable-resizable-vue3/DraggableResizableVue3.vue'

export default {
  title: 'Manual1',
  component: DraggableResizableVue,
  argTypes: {
    parent: {
      options: [true, '#app'],
      control: { type: 'select' },
    },
    resizeHandlesType: {
      options: ['handles', 'borders', 'custom'],
      control: { type: 'select' },
    },
    grid: {
      options: [
        [10, 10],
        [20, 20],
        [30, 30],
      ],
      control: { type: 'select' },
    },
    showGrid: {
      options: [true, false, 'x', 'y', 'both'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => ({
  components: { DraggableResizableVue },
  setup() {
    return { args }
  },
  template:
    '<div id="app" style="border:1px solid black; width: 500px; height: 500px"><DraggableResizableVue v-bind="args" /></div>',
})

export const PlayWithProps = Template.bind({})
