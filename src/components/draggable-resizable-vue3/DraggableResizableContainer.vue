<template>
  <div ref="el" :style="style" :class="[className]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, type StyleValue, type ComputedRef } from 'vue'
import type { Grid, ShowGrid } from './interfaces'

export interface Props {
  grid?: Grid
  showGrid?: ShowGrid
  gridColor?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  grid: () => [1, 1],
  showGrid: false,
  gridColor: 'rgba(0, 0, 0, 0.1)',
  className: 'drv-container',
})

const grid = computed(() => {
  return props.grid
})

const className = computed(() => {
  return props.className
})

provide<ComputedRef<string>>('drvContainerClass', className)
provide<ComputedRef<Grid>>('drvContainerGrid', grid)

// const emit = defineEmits(['dragging', 'dragstop', 'activated', 'deactivated'])

const el = ref<HTMLElement | null>(null)

const gridBackgroundStyle = computed<string>(() => {
  const axisBg = {
    x: `linear-gradient(-90deg, ${props.gridColor} 1px, transparent 1px) 0px 0px / ${props.grid[0]}px ${props.grid[0]}px`,
    y: `linear-gradient(0deg, ${props.gridColor} 1px, transparent 1px) 0px 0px / ${props.grid[1]}px ${props.grid[1]}px`,
  }

  if (props.showGrid === 'x' || props.showGrid === 'y') {
    return axisBg[props.showGrid]
  }

  return props.showGrid ? `${axisBg.x}, ${axisBg.y}` : ''
})

const style = computed<StyleValue>(() => {
  const style: StyleValue = {
    position: 'relative',
  }

  if (props.showGrid) {
    style.background = gridBackgroundStyle.value
  }

  return style
})
</script>
