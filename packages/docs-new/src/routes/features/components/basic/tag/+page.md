---
title: Tag
---

## Themes

```svelte live
<script lang="ts">
  import { CTag } from '@casual-ui/svelte'
</script>

<CTag label="A primary tag (default)" />
<CTag label="A secondary tag" theme="secondary" />
<CTag label="A secondary tag" theme="warning" />
<CTag label="A secondary tag" theme="negative" />
```

## Sizes

```svelte live
<script lang="ts">
  import { CTag } from '@casual-ui/svelte'
</script>

<CTag label="A xs tag" size="xs" />
<CTag label="A sm tag" size="sm" />
<CTag label="A md (default) tag" />
<CTag label="A lg tag" size="lg" />
<CTag label="A xl tag" size="xl" />
```

## Closeable

```svelte live
<script lang="ts">
  import { CTag, openNotification } from '@casual-ui/svelte'

  function onClose() {
    openNotification({
      title: 'Hi, there',
      theme: 'secondary',
      message: 'You\'ve clicked the close icon',
    })
  }
</script>

<CTag label="A closeable tag" theme="secondary" closeable on:close={onClose} />
```