<script>
  import Attention from '../../../theme/Attention.svelte'

</script>

<Attention type="warning" title="Notice" mb-8>
    <b>These libs should be installed along with CDatePicker</b>
    <ul>
        <li>
            <a href="https://day.js.org/docs/en/display/format#list-of-all-available-formats" target="_blank" rel="noreferrer">dayjs</a>
        </li>
        <li>
            <a href="https://www.npmjs.com/package/@casual-ui/i18n" target="_blank" rel="noreferrer">@casual-ui/i18n</a>
        </li>
    </ul>
</Attention>

<slot />