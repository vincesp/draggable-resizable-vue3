

import {app } from '@storybook/vue3';
import DraggableResizableVue from '../src/components/draggable-resizable-vue3/DraggableResizableVue3.vue'
app.component('DraggableResizableVue', DraggableResizableVue);

export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

}
export const options = {
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: false
}
