<h1 align="center">DraggableResizableVue3</h1>

 [![Latest Version on NPM](https://img.shields.io/npm/v/draggable-resizable-vue3.svg?style=flat-square)](https://www.npmjs.com/package/draggable-resizable-vue3) 
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
 [![npm](https://img.shields.io/npm/dt/draggable-resizable-vue3.svg?style=flat-square)](https://www.npmjs.com/package/draggable-resizable-vue3) 

 Vue 3 component for draggable and resizable elements. 

#### [Live playground (codesandbox).](https://codesandbox.io/s/github/zavalen/draggable-resizable-vue3?file=/src/App.vue)


 Originally this package is a fork of ["draggable-resizable-vue"](https://github.com/mauricius/draggable-resizable-vue) that has been rewritten to Vue 3 Composition API . But it has new features.

---

## Table of Contents

* [Features](#features)
* [Install](#install)
* [Usage](#usage)
  * [Props](#props)
  * [Events](#events)
  * [Styling](#styling)
  * [Slots](#slots)
* [Contributing](#contributing)
* [License](#license)
---

### Features

* No dependencies
* Use draggable, resizable or both
* Define handles for resizing
* Restrict size and movement to parent element
* Snap element to custom grid
* Restrict drag to vertical or horizontal axis
* Maintain aspect ratio
* Touch enabled
* Use your own classes
* Provide your own markup for handles

New features of this fork: 
* Vue 3 (Composition API).
* Using `v-model` for `x`, `y`, `h`, `w` and `active`.
* Toggle active when hovering `active-on-hover`.
* Using css selector for `parent` prop. 
* Showing parent grid using `show-grid` and `grid-color`.
* Borders to resize using `handlesType="borders"`
* A new approach for the styling using [slots](#slots) or [custom styles](#styling) (`handlesType="custom"`). Added prefix `drv-` for default class names to make them less common.

---

## Install

```bash
$ npm install --save draggable-resizable-vue3
```


Register the component globally:

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const app = createApp(App)

app.component('DraggableResizableVue', DraggableResizableVue)

app.mount('#app')

```

or locally (composition API):

```vue
// YourComponent.vue
<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'

</script>
```

---

## Usage

No props usage:

```vue
<template>
    <draggable-resizable-vue>
       Draggable and resizable element
    </draggable-resizable-vue>
</template>

<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'

</script>
```

Usage with position and sizes props:

```vue
<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :min-width="100"
    :min-height="100"
    :max-width="300"
    :max-height="300"
  >
    Draggable and resizable element
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  with: 200,
  height: 200,
  isActive: true,
})
</script>

```
Usage with grid:

```vue
<template>
        <draggable-resizable-vue
          v-model:x="element.x"
          v-model:y="element.y"
          v-model:z="element.zIndex"
          v-model:h="element.height"
          v-model:w="element.width"
          v-model:active="element.isActive"
          :grid=[20,20]
        >
          Draggable and resizable element
        </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
   x: 20,
   y: 20,
   zIndex: 10,
   width: 200,
   height: 200,
   isActive: true,
})
</script>
```
---

### Props


#### draggable
Type: `Boolean`
Required: `false`
Default: `true`

Defines it the component should be draggable or not.

```vue
<draggable-resizable-vue :draggable="false">
```

#### resizable
Type: `Boolean`
Required: `false`
Default: `true`

Defines it the component should be resizable or not.

```vue
<draggable-resizable-vue :resizable="false">
```


#### x
Type: `Number`
Required: `false`
Default: `0`

Define the initial x position of the element.

```vue
<draggable-resizable-vue v-model:x="x">

<script setup>
import { ref } from 'vue'

const x = ref(200)
```

#### y
Type: `Number`
Required: `false`
Default: `0`

Define the initial y position of the element.

```vue
<draggable-resizable-vue :y="0">
```

#### z
Type: `Number|String`
Required: `false`
Default: `auto`

Define the zIndex of the element.

```vue
<draggable-resizable-vue :z="999">
```

#### w
Type: `Number|String`
Required: `false`


Define the initial width of the element. It also supports `auto`, but when you start resizing the value will fallback to a number.

```vue
<draggable-resizable-vue v-model:w="width">

<script setup>
import { ref } from 'vue'

const width = ref(200)
```

#### h
Type: `Number|String`
Required: `false`
Default: `200`

Define the initial height of the element. It also supports `auto`, but when you start resizing the value will fallback to a number.

```vue
<draggable-resizable-vue v-model:h="height">

<script setup>
import { ref } from 'vue'

const height = ref(200)
```

#### minWidth
Type: `Number`
Required: `false`
Default: `50`

Define the minimal width of the element.

```vue
<draggable-resizable-vue :min-width="50">
```

#### minHeight
Type: `Number`
Required: `false`
Default: `50`

Define the minimal height of the element.

```vue
<draggable-resizable-vue :min-height="50">
```

#### maxWidth
Type: `Number`
Required: `false`
Default: `null`

Define the maximum width of the element.

```vue
<draggable-resizable-vue :max-width="400">
```

#### maxHeight
Type: `Number`
Required: `false`
Default: `null`

Define the maximum height of the element.

```vue
<draggable-resizable-vue :max-height="50">
```


#### active
Type: `Boolean`
Required: `false`
Default: `false`

Determines if the component should be active or not. The prop reacts to changes and also can be used with the `sync` [modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to keep the state in sync with the parent. You can use along with the `preventDeactivation` prop in order to fully control the active behavior from outside the component.

```vue
<draggable-resizable-vue v-model:active="isActive">

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
...
```

#### activeOnHover
Type: `Boolean`
Required: `false`
Default: `false`

Toggle `active` while hovering.

```vue
<draggable-resizable-vue :active-on-hover="true">
```

#### preventDeactivation
Type: `Boolean`
Required: `false`
Default: `false`

Determines if the component should be deactivated when the user clicks/taps outside it.

```vue
<draggable-resizable-vue :prevent-deactivation="true">
```


#### handles
Type: `Array`
Required: `false`
Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`

Define the array of handles to restrict the element resizing:
* `tl` - Top left
* `tm` - Top middle
* `tr` - Top right
* `mr` - Middle right
* `br` - Bottom right
* `bm` - Bottom middle
* `bl` - Bottom left
* `ml` - Middle left

```vue
<draggable-resizable-vue :handles="['tm','bm','ml','mr']">
```

#### handlesType
Type: `String`
Required: `false`
Default: `handles`


The prop can be 
`handles`, `borders` or `custom`. 

* `handles` - handles are squares around the element. 
* `borders` - resizable borders and corners of the element. If `custom`
* `custom` - no styles for handles. For using your own styles or classes.
* 
* New approach for styling component.



```vue
<draggable-resizable-vue handles-type="borders">
```

#### handlesSize
Type: `Number`
Required: `false`
Default: `10`


If `handlesType='handles'` defines the squares sizes. if If `handlesType='border'` defines the borders sizes`borders` or `custom`. 




```vue
<draggable-resizable-vue handles-size="14">
```

#### axis
Type: `String`
Required: `false`
Default: `both`

Define the axis on which the element is draggable. Available values are `x`, `y` or `both`.

```vue
<draggable-resizable-vue axis="x">
```

#### grid
Type: `Array`
Required: `false`
Default: `[1,1]`

Define the grid on which the element is snapped.

```vue
<draggable-resizable-vue :grid="[20,20]">
```


#### showGrid
Type: `Boolean|String`
Required: `false`
Default: `false`

Works only if `:parent="true"` or `parent=".selector"`. Adds grid to the parent element. Can be `true`, `false`, `'x'`, `'y'`, `'both'`. 

```vue
<draggable-resizable-vue :showGrid="true">
```

#### gridColor
Type: `String`
Required: `false`
Default: `rgba(0, 0, 0, 0.1)`

Color of the grid when `:showGrid="true"`.

```vue
<draggable-resizable-vue :showGrid="true">
```

#### parent
Type: `Boolean|String`
Required: `false`
Default: `false`

If it's `true` restricts the movement and the dimensions of the component to the parent. Also you can provide a selector of any parent element.

```vue
<draggable-resizable-vue parent=".parent">
```

#### dragHandle
Type: `String`
Required: `false`

Defines the selector that should be used to drag the component.

```vue
<draggable-resizable-vue drag-handle=".drag">
```

#### dragCancel
Type: `String`
Required: `false`

Defines a selector that should be used to prevent drag initialization.

```vue
<draggable-resizable-vue drag-cancel=".drag">
```

#### lockAspectRatio
Type: `Boolean`
Required: `false`
Default: `false`

The `lockAspectRatio` property is used to lock aspect ratio. This property doesn't play well with `grid`, so make sure to use only one at a time.

```vue
<draggable-resizable-vue :lock-aspect-ratio="true">
```


#### scale
Type: `Number|Array`
Required: `false`
Default: `1`

The `scale` prop controls the scale property when the CSS 3 [scale transformation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale) is applied to one of the parent elements. If not provided the default value is 1.

```vue
<draggable-resizable-vue :scale="0.5">

<draggable-resizable-vue :scale="[0.5, 0.4]">
```

#### disableUserSelect
Type: `Boolean`
Required: `false`
Default: `true`

By default, the component adds the style declaration `'user-select:none'` to itself to prevent text selection during drag. You can disable this behaviour by setting this prop to `false`.

```vue
<draggable-resizable-vue :disable-user-select="false">
```

#### enableNativeDrag
Type: `Boolean`
Required: `false`
Default: `false`

By default, the browser's native drag and drop funcionality (usually used for images and some other elements) is disabled, as it may conflict with the one provided by the component. If you need, for whatever reason, to have this functionality back you can set this prop to `true`.

```vue
<draggable-resizable-vue :enable-native-drag="true">
```


#### className
Type: `String`
Required: `false`
Default: `drv`

Used to set the custom `class` of a draggable-resizable component.

```vue
<draggable-resizable-vue class-name="my-class">
```

#### classNameDraggable
Type: `String`
Required: `false`
Default: `drv-draggable`

Used to set the custom `class` of a draggable-resizable component when `draggable` is enable.

```vue
<draggable-resizable-vue class-name-draggable="my-draggable-class">
```

#### classNameResizable
Type: `String`
Required: `false`
Default: `drv-resizable`

Used to set the custom `class` of a draggable-resizable component when `resizable` is enable.

```vue
<draggable-resizable-vue class-name-resizable="my-resizable-class">
```

#### classNameDragging
Type: `String`
Required: `false`
Default: `drv-dragging`

Used to set the custom `class` of a draggable-resizable component when is dragging.

```vue
<draggable-resizable-vue class-name-dragging="my-dragging-class">
```

#### classNameResizing
Type: `String`
Required: `false`
Default: `drv-resizing`

Used to set the custom `class` of a draggable-resizable component when is resizing.

```vue
<draggable-resizable-vue class-name-resizing="my-resizing-class">
```

#### classNameActive
Type: `String`
Required: `false`
Default: `drv-active`

Used to set the custom `class` of a draggable-resizable component when is active.

```vue
<draggable-resizable-vue class-name-active="my-active-class">
```

#### classNameHandle
Type: `String`
Required: `false`
Default: `drv-handle`

Used to set the custom common `class` of each handle element. This way you can style each handle individually using the selector `<your class>-<handle code>`, where `handle code` identifies one of the handles provided by the `handle` prop.

So for example, this component:

```vue
<draggable-resizable-vue class-name-handle="my-handle-class"></draggable-resizable-vue>
```

renders the following:

```vue
<div ...>
  <div class="my-handle-class my-handle-class-tl ..."></div>
  <div class="my-handle-class my-handle-class-tm ..."></div>
  <div class="my-handle-class my-handle-class-tr ..."></div>
  [...]
</div>
```


#### onDragStart
Type: `Function`
Required: `false`
Default: `null`

Called when dragging starts (element is clicked or touched). If `false` is returned by any handler, the action will cancel. You can use this function to prevent bubbling of events.

```vue
<draggable-resizable-vue :onDragStart="onDragStartCallback">
```

```js
function onDragStartCallback(ev){
   ...
   // return false; — for cancel
}
```

#### onDrag
Type: `Function`
Required: `false`
Default: `null`

Called before the element is dragged. The function receives the next values of `x` and `y`. If `false` is returned by any handler, the action will cancel.

```vue
<draggable-resizable-vue :onDrag="onDragCallback">
```

```js
function onDragStartCallback(x, y){
   ...
   // return false; — for cancel
}
```


#### onResizeStart
Type: `Function`
Required: `false`
Default: `null`

Called when resizing starts (handle is clicked or touched). If `false` is returned by any handler, the action will cancel.

```vue
<draggable-resizable-vue :onResizeStart="onResizeStartCallback">
```

```js

function onResizeStartCallback(handle, ev){
   ...
   // return false; — for cancel
}
```

#### onResize
Type: `Function`
Required: `false`
Default: `null`

Called before the element is resized. The function receives the handle and the next values of `x`, `y`, `width` and `height`. If `false` is returned by any handler, the action will cancel.

```vue
<draggable-resizable-vue :onResize="onResizeCallback">
```

```js

function onResizeStartCallback(handle, x, y, width, height){
   ...
   // return false; — for cancel
}
```
---

### Events

#### activated

Parameters: `-`

Called whenever the component gets clicked, in order to show handles.

```vue
<draggable-resizable-vue @activated="onActivated">
```

#### deactivated

Parameters: `-`

Called whenever the user clicks anywhere outside the component, in order to deactivate it.

```vue
<draggable-resizable-vue @deactivated="onDeactivated">
```

#### resizing

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component gets resized.

```vue
<draggable-resizable-vue @resizing="onResizing">
```

#### resizestop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component stops getting resized.

```vue
<draggable-resizable-vue @resizestop="onResizstop">
```

#### dragging

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component gets dragged.

```vue
<draggable-resizable-vue @dragging="onDragging">
```

#### dragstop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component stops getting dragged.

```vue
<draggable-resizable-vue @dragstop="onDragstop">
```

---

### Styling

You can style the component using appropriate class names passed as props to the component. Moreover you can disable the default styles for the handles, using `handles-type="custom"`, but you should take care to define position and size for them. The default classes for handles are `handle` and `handle-tl`, `handle-br` and so on.

Here is the templates you can use for custom styles: 
* [`handles-type="handles"` - link](https://github.com/zavalen/draggable-resizable-vue3/blob/master/src/components/draggable-resizable-vue3/css/DraggableResizableVue3Handles.css).
* [`handles-type="borders"` - link](https://github.com/zavalen/draggable-resizable-vue3/blob/master/src/components/draggable-resizable-vue3/css/DraggableResizableVue3Borders.css).

---


## Slots 
The component also provides [named slots](https://vuejs.org/v2/guide/components-slots.vue#Named-Slots) for each handle, so you can use your markup inside each one.

Customizing all handles.

```vue
<draggable-resizable-vue>
   <template #handle>
   ...
   </template>
</draggable-resizable-vue>
```

Or customize specific handle:
* `handle-tl` - Top left
* `handle-tm` - Top middle
* `handle-tr` - Top right
* `handle-mr` - Middle right
* `handle-br` - Bottom right
* `handle-bm` - Bottom middle
* `handle-bl` - Bottom left
* `handle-ml` - Middle left
```vue

<draggable-resizable-vue>
   <template #handle-bl>
   ...
   </template>
</draggable-resizable-vue>
```
---


## Contributing

Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome.

``` bash
# serve with hot reload at localhost:8080
npm run serve

# distribution build
npm run build

# build the storybook docs into gh-pages
npm run gh-pages:build

# run tests
npm run tests

# run storybook at localhost:9001
npm run storybook
```
---

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
