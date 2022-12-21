import { isFunction } from './fns'

export function matchesSelectorToParentElements(
  el: HTMLElement,
  selector,
  baseNode,
) {
  let node = el

  const matchesSelectorFunc = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector',
  ].find((func) => isFunction(node[func]))

  if (!isFunction(node[matchesSelectorFunc])) return false

  do {
    if (node[matchesSelectorFunc](selector)) return true
    if (node === baseNode) return false
    node = node.parentNode
  } while (node)

  return false
}

export const getComputedSize = ($el: HTMLElement): [number, number] => {
  const style = window.getComputedStyle($el)

  return [
    parseFloat(style.getPropertyValue('width')),
    parseFloat(style.getPropertyValue('height')),
  ]
}

export const addEvent = (
  el: HTMLElement,
  event: string,
  handler: () => void,
): void => {
  el.addEventListener(event, handler, true)
}

export const removeEvent = (
  el: HTMLElement,
  event: string,
  handler: () => void,
) => {
  el.removeEventListener(event, handler, true)
}
