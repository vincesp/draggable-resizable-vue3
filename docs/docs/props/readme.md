# Props

## Position and sizes

### x

Type: `Number`<br />
Required: `false`<br />
Default: `0`<br />

Define the x position of the element.

```vue
<draggable-resizable-vue v-model:x="x">
```

### y

Type: `Number`<br />
Required: `false`<br />
Default: `0`<br />

Define the y position of the element.

```vue
<draggable-resizable-vue v-model:y="0">
```

### z

Type: `Number|String`<br />
Required: `false`<br />
Default: `auto`<br />

Define the zIndex of the element.

```vue
<draggable-resizable-vue :z="999">
```

### w

Type: `Number|String`<br />
Required: `false`<br />

Define the initial width of the element. It also supports `auto`, but when you start resizing the value will fallback to a number.

```vue
<draggable-resizable-vue v-model:w="width">

```

### h

Type: `Number|String`<br />
Required: `false`<br />
Default: `200`<br />

Define the initial height of the element. It also supports `auto`, but when you start resizing the value will fallback to a number.

```vue
<draggable-resizable-vue v-model:h="height">

```

### minWidth

Type: `Number`<br />
Required: `false`<br />
Default: `50`<br />

Define the minimal width of the element.

```vue
<draggable-resizable-vue :min-width="50">
```

### minHeight

Type: `Number`<br />
Required: `false`<br />
Default: `50`<br />

Define the minimal height of the element.

```vue
<draggable-resizable-vue :min-height="50">
```

### maxWidth

Type: `Number`<br />
Required: `false`<br />
Default: `null`<br />

Define the maximum width of the element.

```vue
<draggable-resizable-vue :max-width="400">
```

### maxHeight

Type: `Number`<br />
Required: `false`<br />
Default: `null`<br />

Define the maximum height of the element.

```vue
<draggable-resizable-vue :max-height="50">
```

## Active state

### active

Type: `Boolean`<br />
Required: `false`<br />
Default: `false`<br />

Determines if the component should be active or not. The prop reacts to changes and also can be used with the `sync` [modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to keep the state in sync with the parent. You can use along with the `preventDeactivation` prop in order to fully control the active behavior from outside the component.

```vue
<draggable-resizable-vue v-model:active="isActive">

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
...
```

### activeOnHover

Type: `Boolean`<br />
Required: `false`<br />
Default: `false`<br />

Toggle `active` while hovering.

```vue
<draggable-resizable-vue :active-on-hover="true">
```

### preventDeactivation

Type: `Boolean`<br />
Required: `false`<br />
Default: `false`<br />

Determines if the component should be deactivated when the user clicks/taps outside it.

```vue
<draggable-resizable-vue :prevent-deactivation="true">
```

## Dragging

### draggable

Type: `Boolean`<br />
Required: `false`<br />
Default: `true`<br />

Defines it the component should be draggable or not.

```vue
<draggable-resizable-vue :draggable="false">
```

### dragHandle

Type: `String`<br />
Required: `false`<br />

Defines the selector that should be used to drag the component.

```vue
<draggable-resizable-vue drag-handle=".drag">
```

### dragCancel

Type: `String`<br />
Required: `false`<br />

Defines a selector that should be used to prevent drag initialization.

```vue
<draggable-resizable-vue drag-cancel=".drag">
```

### disableUserSelect

Type: `Boolean`<br />
Required: `false`<br />
Default: `true`<br />

By default, the component adds the style declaration `'user-select:none'` to itself to prevent text selection during drag. You can disable this behaviour by setting this prop to `false`.

```vue
<draggable-resizable-vue :disable-user-select="false">
```

### enableNativeDrag

Type: `Boolean`<br />
Required: `false`<br />
Default: `false`<br />

By default, the browser's native drag and drop funcionality (usually used for images and some other elements) is disabled, as it may conflict with the one provided by the component. If you need, for whatever reason, to have this functionality back you can set this prop to `true`.

```vue
<draggable-resizable-vue :enable-native-drag="true">
```

## Resizing

### resizable

Type: `Boolean`<br />
Required: `false`<br />
Default: `true`<br />

Defines it the component should be resizable or not.

```vue
<draggable-resizable-vue :resizable="false">
```

### lockAspectRatio

Type: `Boolean`<br />
Required: `false`<br />
Default: `false`<br />

The `lockAspectRatio` property is used to lock aspect ratio. This property doesn't play well with `grid`, so make sure to use only one at a time.

```vue
<draggable-resizable-vue :lock-aspect-ratio="true">
```

### handles

Type: `Array`<br />
Required: `false`<br />
Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`<br />

Define the array of handles to restrict the element resizing:

- `tl` - Top left
- `tm` - Top middle
- `tr` - Top right
- `mr` - Middle right
- `br` - Bottom right
- `bm` - Bottom middle
- `bl` - Bottom left
- `ml` - Middle left

```vue
<draggable-resizable-vue :handles="['tm','bm','ml','mr']">
```

### handlesType

Type: `String`<br />
Required: `false`<br />
Default: `handles`<br />

The prop can be
`handles`, `borders` or `custom`.

- `handles` - handles are squares around the element.
- `borders` - resizable borders and corners of the element. If `custom`
- `custom` - no styles for handles. For using your own styles or classes.
-
- New approach for styling component.

```vue
<draggable-resizable-vue handles-type="borders">
```

### handlesSize

Type: `Number`<br />
Required: `false`<br />
Default: `10`<br />

If `handlesType='handles'` defines the squares sizes. if If `handlesType='border'` defines the borders sizes`borders` or `custom`.

```vue
<draggable-resizable-vue :handles-size="14">
```
### handlesBorder

Type: `String`<br />
Required: `false`<br />
Default: `0.5px solid #bbb`<br />

You can modify or disable the handles border.

```vue
<draggable-resizable-vue handles-border="none">
```

## Parent

You can use `parent` prop as a selector but we recommend using `draggable-resizable-container` instead. Check the container props [here](/docs/container-props/).

### parent

Type: `Boolean|String`<br />
Required: `false`<br />
Default: `false`<br />

If it's `true` restricts the movement and the dimensions of the component to the parent. Also you can provide a selector of any parent element.

```vue
<draggable-resizable-vue parent=".parent">
```

## Grid

### axis

Type: `String`<br />
Required: `false`<br />
Default: `both`<br />

Define the axis on which the element is draggable. Available values are `x`, `y` or `both`.

```vue
<draggable-resizable-vue axis="x">
```

### grid

Type: `Array`<br />
Required: `false`<br />
Default: `[1,1]`<br />

Define the grid on which the element is snapped.

```vue
<draggable-resizable-vue :grid="[20,20]">
```

### showGrid

Type: `Boolean|String`<br />
Required: `false`<br />
Default: `false`<br />

Works only if `:parent="true"` or `parent=".selector"`. Adds grid to the parent element. Can be `true`, `false`, `'x'`, `'y'`, `'both'`.

```vue
<draggable-resizable-vue :show-grid="true">
```

### gridColor

Type: `String`<br />
Required: `false`<br />
Default: `rgba(0, 0, 0, 0.1)`<br />

Color of the grid when `:show-grid="true"`.

```vue
<draggable-resizable-vue grid-color="rgba(0, 0, 0, 0.3)">
```

## scale

Type: `Number|Array`<br />
Required: `false`<br />
Default: `1`<br />

The `scale` prop controls the scale property when the CSS 3 [scale transformation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale) is applied to one of the parent elements. If not provided the default value is 1.

```vue
<draggable-resizable-vue :scale="0.5">

<draggable-resizable-vue :scale="[0.5, 0.4]">
```

## Classes

### className

Type: `String`<br />
Required: `false`<br />
Default: `drv`<br />

Used to set the custom `class` of a draggable-resizable component.

```vue
<draggable-resizable-vue class-name="my-class">
```

### classNameDraggable

Type: `String`<br />
Required: `false`<br />
Default: `drv-draggable`<br />

Used to set the custom `class` of a draggable-resizable component when `draggable` is enable.

```vue
<draggable-resizable-vue class-name-draggable="my-draggable-class">
```

### classNameResizable

Type: `String`<br />
Required: `false`<br />
Default: `drv-resizable`<br />

Used to set the custom `class` of a draggable-resizable component when `resizable` is enable.

```vue
<draggable-resizable-vue class-name-resizable="my-resizable-class">
```

### classNameDragging

Type: `String`<br />
Required: `false`<br />
Default: `drv-dragging`<br />

Used to set the custom `class` of a draggable-resizable component when is dragging.

```vue
<draggable-resizable-vue class-name-dragging="my-dragging-class">
```

### classNameResizing

Type: `String`<br />
Required: `false`<br />
Default: `drv-resizing`<br />

Used to set the custom `class` of a draggable-resizable component when is resizing.

```vue
<draggable-resizable-vue class-name-resizing="my-resizing-class">
```

### classNameActive

Type: `String`<br />
Required: `false`<br />
Default: `drv-active`<br />

Used to set the custom `class` of a draggable-resizable component when is active.

```vue
<draggable-resizable-vue class-name-active="my-active-class">
```

### classNameHandle

Type: `String`<br />
Required: `false`<br />
Default: `drv-handle`<br />

Used to set the custom common `class` of each handle element. This way you can style each handle individually using the selector `<your class>-<handle code>`, where `handle code` identifies one of the handles provided by the `handle` prop.

So for example, this component:

```vue
<draggable-resizable-vue
  class-name-handle="my-handle-class"
></draggable-resizable-vue>
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

## Functions

### onDragStart

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

### onDrag

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

### onResizeStart

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

### onResize

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
