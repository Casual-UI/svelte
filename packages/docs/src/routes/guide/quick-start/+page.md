---
title: Quick Start
---

## Install 

@install-pkg(@casual-ui/svelte)

## Import style in your client entry

For example, if you're using [SvelteKit](http://kit.svelte.dev/). Then in your /src/routes/+layout.svelte

```js title="/src/routes/+layout.svelte"
import '@casual-ui/svelte/dist/style/style.css'
```

## Use in svelte files

```svelte live
<script>
  import { CButton } from '@casual-ui/svelte'
</script>

<CButton label="A Button" />
```