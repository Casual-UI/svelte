<script lang="ts">
  import { CButton } from '@casual-ui/svelte'
</script>

<div class="grid grid-cols-3 md:grid-cols-2 gap-4">
  <div>
    <CButton label="A Primary (default) Button" />
  </div>
  <div>
    <CButton label="A Secondary Button" theme="secondary" />
  </div>
  <div>
    <CButton label="A Warning Button" theme="warning" />
  </div>
  <div>
    <CButton label="A Negative Button" theme="negative" />
  </div>
  <div>
    <CButton label="A Primary (default) Button" outlined />
  </div>
  <div>
    <CButton label="A Secondary Button" theme="secondary" outlined />
  </div>
  <div>
    <CButton label="A Warning Button" theme="warning" outlined />
  </div>
  <div>
    <CButton label="A Negative Button" theme="negative" outlined />
  </div>
  <div>
    <CButton label="A Primary (default) Button" flat />
  </div>
  <div>
    <CButton label="A Secondary Button" theme="secondary" flat />
  </div>
  <div>
    <CButton label="A Warning Button" theme="warning" flat />
  </div>
  <div>
    <CButton label="A Negative Button" theme="negative" flat />
  </div>
</div>
