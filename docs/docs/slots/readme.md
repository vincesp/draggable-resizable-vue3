# Slots 
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