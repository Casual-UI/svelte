<script lang="ts">
  import Description from './Description.svelte'
  import InlineCode from './InlineCode.svelte'
  import VariableName from './VariableName.svelte'

  export let apiList: Array<any> = []

  export let isSlot = false

  export let isProp = false

  export let showDefault = false
</script>

{#if apiList.length}
  <ul class="cui-api-list">
    {#each apiList as { defaultValue, name, type, description, params }}
      <li class="mb-4">
        <div class="flex items-center flex-wrap">
          <VariableName>
            {name}
          </VariableName>
          {#if isProp}
            <div class="mx-2">
              <InlineCode>
                {type?.text}
              </InlineCode>
            </div>
            {#if showDefault}
              <span>default: <InlineCode>{defaultValue}</InlineCode></span>
            {/if}
          {/if}
          <Description>
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html description}
          </Description>
        </div>
        {#if isSlot && params && params.length}
          <p><b>Bindings:</b></p>
          <ul class="my-0">
            <!-- Ignore the `{xxx}` bindings -->
            <!-- TODO: Make the sveltedoc-parser support this -->
            {#each params.filter(p => !p.name.startsWith('{')) as param}
              <li class="mb-4">
                <VariableName>
                  {param.name}
                </VariableName>
                <InlineCode>
                  {param.type.text}
                </InlineCode>
                <Description>
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html param.description}
                </Description>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
{:else}
  <div class="px-4 pb-4 dark:text-[#8c8c8c] text-gray-4">No data</div>
{/if}

<style>
  .cui-api-list {
    --at-apply: 'm-0 text-[14px]';
  }
  :global(.cui-api-list p) {
    margin: 0;
  }
  :global(.cui-api-list .svp-code-block-wrapper) {
    margin-bottom: 0;
  }
  :global(.cui-api-list a) {
    --at-apply: 'text-svp-primary hover:text-svp-hover';
  }
</style>
