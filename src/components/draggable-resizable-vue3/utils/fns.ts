import type { Grid, Scale } from '../interfaces'

export const isFunction = (func: unknown): boolean => {
  return (
    typeof func === 'function' ||
    Object.prototype.toString.call(func) === '[object Function]'
  )
}

export function snapToGrid(
  grid: Grid,
  pendingX: number,
  pendingY: number,
  scale: Scale = 1,
): [number, number] {
  const [scaleX, scaleY] = typeof scale === 'number' ? [scale, scale] : scale
  const x = Math.round(pendingX / scaleX / grid[0]) * grid[0]
  const y = Math.round(pendingY / scaleY / grid[1]) * grid[1]
  return [x, y]
}

export function getSize(el: HTMLElement): [number, number] {
  const rect = el.getBoundingClientRect()

  return [rect.width, rect.height]
}

export function computeWidth(
  parentWidth: number,
  left: number,
  right: number,
): number {
  return parentWidth - left - right
}

export function computeHeight(
  parentHeight: number,
  top: number,
  bottom: number,
): number {
  return parentHeight - top - bottom
}

export function restrictToBounds(
  value: number,
  min: number | null,
  max: number | null,
): number {
  if (min !== null && value < min) {
    return min
  }

  if (max !== null && max < value) {
    return max
  }

  return value
}
