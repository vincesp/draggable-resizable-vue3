

# Container props

## grid
Type: `Array`<br />
Required: `false`<br />
Default: `[1,1]`<br />

Define the grid on which the internal elements is snapped.

```vue
<draggable-resizable-container :grid="[20,20]">
```

## showGrid
Type: `Boolean|String`<br />
Required: `false`<br />
Default: `false`<br />

```vue
<draggable-resizable-container :show-grid="true">
```

## gridColor
Type: `String`<br />
Required: `false`<br />
Default: `rgba(0, 0, 0, 0.1)`<br />

Color of the grid when `:show-grid="true"`.

```vue
<draggable-resizable-container grid-color="#000">
```


## className
Type: `String`<br />
Required: `false`<br />
Default: `drv-container`<br />


```vue
<draggable-resizable-container class-name="my-class">
```

