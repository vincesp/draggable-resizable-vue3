export type ShowGrid = boolean | Axis
export type Grid = [x: number, y: number]

export type Scale = number | [x: number, y: number]
export type Handle = 'tl' | 'tm' | 'tr' | 'mr' | 'br' | 'bm' | 'bl' | 'ml'
export type HandlesType = 'handles' | 'borders' | 'custom'
export type Axis = 'x' | 'y' | 'both'
export type NumberOrAuto = number | 'auto'
