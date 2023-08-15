---
title: Tag
componentName: CTag
---

## Themes

```svelte live
<CTag label="A primary tag (default)" />
<CTag label="A secondary tag" theme="secondary" />
<CTag label="A secondary tag" theme="warning" />
<CTag label="A secondary tag" theme="negative" />
```

## Solid style

```svelte live
<CTag label="A primary solid tag" solid />
<CTag label="A secondary solid tag" theme="secondary" solid />
<CTag label="A secondary solid tag" theme="warning" solid />
<CTag label="A secondary solid tag" theme="negative" solid />
```

## Sizes

```svelte live
<CTag label="A xs tag" size="xs" />
<CTag label="A sm tag" size="sm" />
<CTag label="A md (default) tag" />
<CTag label="A lg tag" size="lg" />
<CTag label="A xl tag" size="xl" />
<CTag label="A xs tag" size="xs" solid />
<CTag label="A sm tag" size="sm" solid />
<CTag label="A md (default) tag" solid />
<CTag label="A lg tag" size="lg" solid />
<CTag label="A xl tag" size="xl" solid />
```

## Rounded

```svelte live
<CTag label="A xs rounded tag" theme="secondary" rounded solid size="xs" />
<CTag label="A xs rounded tag" theme="warning" rounded size="sm" />
<CTag label="A rounded tag" rounded />
<CTag label="A lg rounded tag" theme="negative" size="lg" rounded solid />
<CTag label="A xl rounded tag" theme="secondary" size="xl" rounded />
```

## Closeable

```svelte live
<script lang="ts">
  import { openNotification } from '@casual-ui/svelte'

  function onClose(theme) {
    openNotification({
      title: 'Hi, there',
      theme,
      message: 'You\'ve clicked the close icon',
    })
  }
</script>

<CTag label="A closeable tag" solid closeable on:close={() => onClose('primary')} />
<CTag label="A closeable tag" theme="secondary" closeable on:close={() => onClose('secondary')} />
<CTag label="A closeable tag" solid closeable theme="warning" on:close={() => onClose('warning')} />
<CTag label="A closeable tag" theme="negative" closeable on:close={() => onClose('negative')} />
```