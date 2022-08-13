<p align="center"><img src="https://rawgit.com/mauricius/draggable-resizable-vue/v1/docs/resources/logo.png" alt="logo"></p>
<h1 align="center">DraggableResizableVue3</h1>

<!-- [![Latest Version on NPM](https://img.shields.io/npm/v/draggable-resizable-vue.svg?style=flat-square)](https://npmjs.com/package/draggable-resizable-vue) -->
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
<!-- [![npm](https://img.shields.io/npm/dt/draggable-resizable-vue.svg?style=flat-square)](https://www.npmjs.com/package/draggable-resizable-vue) -->

> Vue 3 component for draggable and resizable elements. 
> 
> Originally this package is a fork of ["draggable-resizable-vue"](https://github.com/mauricius/draggable-resizable-vue) that has been rewritten to Vue 3 Composition API . But it has new features.


## Table of Contents

* [Features](#features)
* [Live Playground](#live-playground)
* [Install and basic usage](#install-and-basic-usage)
  * [Props](#props)
  * [Events](#events)
  * [Styling](#styling)
* [Contributing](#contributing)
* [License](#license)

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

### Live Playground

For examples of the component go to the [live playground](https://mauricius.github.io/draggable-resizable-vue/)

Alternatively you can run the playground on your own computer:

* Clone this repository
* `npm install`
* `npm run storybook`
* Visit [http://localhost:9001/](http://localhost:9001/)

---

## Install and basic usage

```bash
$ npm install --save draggable-resizable-vue3
```


Register the component globally:

```js
import { createApp } from 'vue'
import App from './App.vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

// optionally import default styles
import 'draggable-resizable-vue3/dist/DraggableResizableVue3.css'

const app = createApp(App)
app.component('DraggableResizableVue', DraggableResizableVue)

app.mount('#app')

```

or locally (composition API):

```html
<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'
import 'draggable-resizable-vue3/dist/DraggableResizableVue3.css'

</script>
```

Basic no props usage:

```vue
<template>
    <draggable-resizable-vue>
      Draggable element
    </draggable-resizable-vue>
</template>

<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'
import 'draggable-resizable-vue3/dist/DraggableResizableVue3.css'

</script>
```
Basic usage:

```vue
<template>
     <draggable-resizable-vue>
      Draggable element
    </draggable-resizable-vue>
</template>

<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'
import 'draggable-resizable-vue3/dist/DraggableResizableVue3.css'

</script>
```

### Props

#### className
Type: `String`<br>
Required: `false`<br>
Default: `drv`

Used to set the custom `class` of a draggable-resizable component.

```html
<draggable-resizable-vue class-name="my-class">
```

#### classNameDraggable
Type: `String`<br>
Required: `false`<br>
Default: `draggable`

Used to set the custom `class` of a draggable-resizable component when `draggable` is enable.

```html
<draggable-resizable-vue class-name-draggable="my-draggable-class">
```

#### classNameResizable
Type: `String`<br>
Required: `false`<br>
Default: `resizable`

Used to set the custom `class` of a draggable-resizable component when `resizable` is enable.

```html
<draggable-resizable-vue class-name-resizable="my-resizable-class">
```

#### classNameDragging
Type: `String`<br>
Required: `false`<br>
Default: `dragging`

Used to set the custom `class` of a draggable-resizable component when is dragging.

```html
<draggable-resizable-vue class-name-dragging="my-dragging-class">
```

#### classNameResizing
Type: `String`<br>
Required: `false`<br>
Default: `resizing`

Used to set the custom `class` of a draggable-resizable component when is resizing.

```html
<draggable-resizable-vue class-name-resizing="my-resizing-class">
```

#### classNameActive
Type: `String`<br>
Required: `false`<br>
Default: `active`

Used to set the custom `class` of a draggable-resizable component when is active.

```html
<draggable-resizable-vue class-name-active="my-active-class">
```

#### classNameHandle
Type: `String`<br>
Required: `false`<br>
Default: `handle`

Used to set the custom common `class` of each handle element. This way you can style each handle individually using the selector `<your class>-<handle code>`, where `handle code` identifies one of the handles provided by the `handle` prop.

So for example, this component:

```html
<draggable-resizable-vue class-name-handle="my-handle-class"></draggable-resizable-vue>
```

renders the following:

```html
<div ...>
  <div class="my-handle-class my-handle-class-tl"></div>
  <div class="my-handle-class my-handle-class-tm"></div>
  <div class="my-handle-class my-handle-class-tr"></div>
  [...]
</div>
```

#### scale
Type: `Number|Array`<br>
Required: `false`<br>
Default: `1`

The `scale` prop controls the scale property when the CSS 3 [scale transformation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale) is applied to one of the parent elements. If not provided the default value is 1.

```html
<draggable-resizable-vue :scale="0.5">

<draggable-resizable-vue :scale="[0.5, 0.4]">
```

#### disableUserSelect
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

By default, the component adds the style declaration `'user-select:none'` to itself to prevent text selection during drag. You can disable this behaviour by setting this prop to `false`.

```html
<draggable-resizable-vue :disable-user-select="false">
```

#### enableNativeDrag
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

By default, the browser's native drag and drop funcionality (usually used for images and some other elements) is disabled, as it may conflict with the one provided by the component. If you need, for whatever reason, to have this functionality back you can set this prop to `true`.

```html
<draggable-resizable-vue :enable-native-drag="true">
```

#### active
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determines if the component should be active or not. The prop reacts to changes and also can be used with the `sync`[modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to keep the state in sync with the parent. You can use along with the `preventDeactivation` prop in order to fully control the active behavior from outside the component.

```html
<draggable-resizable-vue :active="true">
```

#### preventDeactivation
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determines if the component should be deactivated when the user clicks/taps outside it.

```html
<draggable-resizable-vue :prevent-deactivation="true">
```

#### draggable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Defines it the component should be draggable or not.

```html
<draggable-resizable-vue :draggable="false">
```

#### resizable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Defines it the component should be resizable or not.

```html
<draggable-resizable-vue :resizable="false">
```

#### w
Type: `Number|String`<br>
Required: `false`<br>
Default: `200`

Define the initial width of the element. It also supports `auto`, but when you start resizing the value will fallback to a number.

```html
<draggable-resizable-vue :w="200">
```

#### h
Type: `Number|String`<br>
Required: `false`<br>
Default: `200`

Define the initial height of the element. It also supports `auto`, but when you start resizing the value will fallback to a number.

```html
<draggable-resizable-vue :h="200">
```

#### minWidth
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal width of the element.

```html
<draggable-resizable-vue :min-width="50">
```

#### minHeight
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal height of the element.

```html
<draggable-resizable-vue :min-height="50">
```

#### maxWidth
Type: `Number`<br>
Required: `false`<br>
Default: `null`

Define the maximum width of the element.

```html
<draggable-resizable-vue :max-width="400">
```

#### maxHeight
Type: `Number`<br>
Required: `false`<br>
Default: `null`

Define the maximum height of the element.

```html
<draggable-resizable-vue :max-height="50">
```

#### x
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial x position of the element.

```html
<draggable-resizable-vue :x="0">
```

#### y
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial y position of the element.

```html
<draggable-resizable-vue :y="0">
```

#### z
Type: `Number|String`<br>
Required: `false`<br>
Default: `auto`

Define the zIndex of the element.

```html
<draggable-resizable-vue :z="999">
```

#### handles
Type: `Array`<br>
Required: `false`<br>
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

```html
<draggable-resizable-vue :handles="['tm','bm','ml','mr']">
```

#### axis
Type: `String`<br>
Required: `false`<br>
Default: `both`

Define the axis on which the element is draggable. Available values are `x`, `y` or `both`.

```html
<draggable-resizable-vue axis="x">
```

#### grid
Type: `Array`<br>
Required: `false`<br>
Default: `[1,1]`

Define the grid on which the element is snapped.

```html
<draggable-resizable-vue :grid="[1,1]">
```

#### parent
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Restricts the movement and the dimensions of the component to the parent.

```html
<draggable-resizable-vue :parent="true">
```

#### dragHandle
Type: `String`<br>
Required: `false`

Defines the selector that should be used to drag the component.

```html
<draggable-resizable-vue drag-handle=".drag">
```

#### dragCancel
Type: `String`<br>
Required: `false`

Defines a selector that should be used to prevent drag initialization.

```html
<draggable-resizable-vue drag-cancel=".drag">
```

#### lockAspectRatio
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

The `lockAspectRatio` property is used to lock aspect ratio. This property doesn't play well with `grid`, so make sure to use only one at a time.

```html
<draggable-resizable-vue :lock-aspect-ratio="true">
```

#### onDragStart
Type: `Function`<br>
Required: `false`<br>
Default: `null`

Called when dragging starts (element is clicked or touched). If `false` is returned by any handler, the action will cancel. You can use this function to prevent bubbling of events.

```html
<draggable-resizable-vue :onDragStart="onDragStartCallback">
```

```js
function onDragStartCallback(ev){
   ...
   // return false; — for cancel
}
```

#### onDrag
Type: `Function`<br>
Required: `false`<br>
Default: `null`

Called before the element is dragged. The function receives the next values of `x` and `y`. If `false` is returned by any handler, the action will cancel.

```html
<draggable-resizable-vue :onDrag="onDragCallback">
```

```js
function onDragStartCallback(x, y){
   ...
   // return false; — for cancel
}
```


#### onResizeStart
Type: `Function`<br>
Required: `false`<br>
Default: `null`

Called when resizing starts (handle is clicked or touched). If `false` is returned by any handler, the action will cancel.

```html
<draggable-resizable-vue :onResizeStart="onResizeStartCallback">
```

```js

function onResizeStartCallback(handle, ev){
   ...
   // return false; — for cancel
}
```

#### onResize
Type: `Function`<br>
Required: `false`<br>
Default: `null`

Called before the element is resized. The function receives the handle and the next values of `x`, `y`, `width` and `height`. If `false` is returned by any handler, the action will cancel.

```html
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

```html
<draggable-resizable-vue @activated="onActivated">
```

#### deactivated

Parameters: `-`

Called whenever the user clicks anywhere outside the component, in order to deactivate it.

```html
<draggable-resizable-vue @deactivated="onDeactivated">
```

#### resizing

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component gets resized.

```html
<draggable-resizable-vue @resizing="onResizing">
```

#### resizestop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component stops getting resized.

```html
<draggable-resizable-vue @resizestop="onResizstop">
```

#### dragging

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component gets dragged.

```html
<draggable-resizable-vue @dragging="onDragging">
```

#### dragstop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component stops getting dragged.

```html
<draggable-resizable-vue @dragstop="onDragstop">
```

---

### Styling

You can style the component using appropriate class names passed as props to the component. Moreover you can replace the default styles for the handles, provided in the source file `draggable-resizable-vue.css`, but you should take care to define position and size for them. The default classes for handles are `handle` and `handle-tl`, `handle-br` and so on.

The component also provides [named slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) for each handle, so you can use your markup inside each one.

## Thanks

Thanks to @kirillmurashov for his work on [vue-drag-resize](https://github.com/kirillmurashov/vue-drag-resize) component.

## Security

If you discover any security related issues, please email maurizio.bonani@gmail.com instead of using the issue tracker.

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

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
