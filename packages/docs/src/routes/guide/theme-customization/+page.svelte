<script lang="ts">
  import vars from 'virtual:casual-scss-theme-vars'
  import Attention from '../../../theme/Attention.svelte'
</script>

<svelte:head>
  <title>Theme Customization - Casual UI Svelte</title>
</svelte:head>
<Attention type="primary" title="Notice">
  All all of theme colors used in Casual UI are defined with
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
    target="_blank"
    rel="noreferrer"
  >
    CSS Custom Properties
  </a>
</Attention>

<h3>Theme Colors</h3>

<p>Casual UI has 4 preset colors</p>

<div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4>
  {#each ['--casual-primary', '--casual-secondary', '--casual-warning', '--casual-negative'] as theme}
    <div
      rounded
      flex
      items-center
      justify-center
      h-20
      text-white
      style={`background-color: var(${theme})`}
    >
      {theme}
    </div>
  {/each}
</div>

<h3>Variables list</h3>
{@html vars}
