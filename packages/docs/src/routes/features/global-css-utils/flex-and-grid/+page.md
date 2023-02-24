---
title: Flex & Grid
---

<script>
  import FlexPlayground from './FlexPlayground.svelte'
  import GridPlayground from './GridPlayground.svelte'
</script>

## Flex & row & columns

| CSS Class           | Equals to CSS                                    |
| ------------------- | ------------------------------------------------ |
| `.c-flex` `.c-row`  | `display: flex;`                                 |
| `.c-inline-flex`    | `display: inline-flex;`                          |
| `.c-column`         | `display: flex; flex-direction: column;`         |
| `.c-row-reverse`    | `display: flex; flex-direction: row-reverse;`    |
| `.c-column-reverse` | `display: flex; flex-direction: column-reverse;` |
| `.c-warp`           | `flex-wrap: wrap;`                               |
| `c-justify-start`   | `justify-content: flex-start;`                   |
| `c-justify-end`     | `justify-content: flex-end;`                     |
| `c-justify-center`  | `justify-content: center;`                       |
| `c-justify-around`  | `justify-content: space-around;`                 |
| `c-justify-evenly`  | `justify-content: space-evenly;`                 |
| `c-justify-between` | `justify-content: space-between;`                |
| `c-items-start`     | `align-items: flex-start;`                       |
| `c-items-center`    | `align-items: center;`                           |
| `c-items-end`       | `align-items: flex-end;`                         |
| `c-items-stretch`   | `align-items: stretch;`                          |
| `c-items-baseline`  | `align-items: baseline;`                         |

## Flex playground

<FlexPlayground />

## Grid

| CSS Class           | Equals to CSS                              |
| ------------------- | ------------------------------------------ |
| `.c-grid`           | `display: grid;`                           |
| `.c-grid-col-[num]` | `grid-template-columns: repeat(num, 1fr);` |
| `.c-grid-row-[num]` | `grid-template-rows: repeat(num, 1fr);`    |
| `.c-grid-gap-xs`    | `gap: 4px;`                                |
| `.c-grid-gap-sm`    | `gap: 8px;`                                |
| `.c-grid-gap-md`    | `gap: 12px;`                               |
| `.c-grid-gap-lg`    | `gap: 16px;`                               |
| `.c-grid-gap-xl`    | `gap: 24px;`                               |

## Grid playground

<GridPlayground />