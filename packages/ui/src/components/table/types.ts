import type { ComponentType } from 'svelte'

export interface Column {
  /**
   * The field of row data
   */
  field: string
  /**
   * The column width
   */
  width?: string
  /**
   * The title content. Can be a svelte component
   */
  title?: string | ComponentType
  /**
   * Customize the cell content with svelte component
   */
  cell?: ComponentType
  /**
   * Make the column sticky to left or right
   */
  sticky?: EStickyPosition
}

export enum EStickyPosition {
  Left = 'left',
  Right = 'right',
}
