<script>
  import { CButton } from '@casual-ui/svelte'
</script> 

<div grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4>
  <div>
    <CButton label="A Basic Button" />
  </div>
  <div>
    <CButton label="A Outlined Button" outlined />
  </div>
  <div>
    <CButton label="A Rounded Button" rounded />
  </div>
  <div>
    <CButton label="A Round Button" round />
  </div>
  <div>
    <CButton label="A Flat Button" round flat />
  </div>
</div>
