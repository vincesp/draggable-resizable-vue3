# Events

## activated

Parameters: `-`

Called whenever the component gets clicked, in order to show handles.

```vue
<draggable-resizable-vue @activated="onActivated">
```

## deactivated

Parameters: `-`

Called whenever the user clicks anywhere outside the component, in order to deactivate it.

```vue
<draggable-resizable-vue @deactivated="onDeactivated">
```

## resizing

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component gets resized.

```vue
<draggable-resizable-vue @resizing="onResizing">
```

## resizestop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component stops getting resized.

```vue
<draggable-resizable-vue @resizestop="onResizstop">
```

## dragging

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component gets dragged.

```vue
<draggable-resizable-vue @dragging="onDragging">
```

## dragstop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component stops getting dragged.

```vue
<draggable-resizable-vue @dragstop="onDragstop">
```
