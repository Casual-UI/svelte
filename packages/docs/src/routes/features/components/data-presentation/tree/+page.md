---
title: Tree
componentName:
  - tree/CTree
---

## Basic
 
```svelte live
<script>
  import { CTree } from '@casual-ui/svelte'

  const tree = [{
    title: 'Root1',
    children: [{
      title: 'Root1 - Sub1'
    }, {
      title: 'Root1 - Sub2'
    }]
  }, {
    title: 'Root2',
    children: [{
      title: 'Root2 - Sub1',
      children: [{
        title: 'Root2 - Sub1 - Sub1',
      }, {
        title: 'Root2 - Sub1 - Sub2',
      }]
    }, {
      title: 'Root2 - Sub2'
    }]
  }]
</script>

<CTree tree="{tree}" />
```

## Tree type

@code(/../ui/src/components/tree/types.ts)