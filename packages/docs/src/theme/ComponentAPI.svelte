<script>
  import ApiList from './APIList.svelte'

  /**
   * @type {any}
   */
  export let api

  $: propId = `${api.name} Props`
  $: eventId = `${api.name} Events`
  $: slotsId = `${api.name} Slots`
  $: exportName = `${api.name} Exports`

  $: exprotsList =
    api.data?.filter(
      (/** @type {{ kind: string; }} */ d) => d.kind === 'const'
    ) || []

  $: propList =
    api.data?.filter(
      (/** @type {{ kind: string; }} */ d) => d.kind === 'let'
    ) || []
</script>

<div class="casual-ui-svelte--component-api">
  <ApiList title={propId} id="props" apiList={propList} isProp />
  <ApiList title={eventId} id="events" apiList={api.events} />
  <ApiList title={slotsId} id="slots" apiList={api.slots} isSlot />
  <ApiList title={exportName} id="exports" apiList={exprotsList} />
</div>
