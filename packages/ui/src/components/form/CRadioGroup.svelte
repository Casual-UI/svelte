<script>
  import { tick } from 'svelte'
  import { useFormProps, useValidator } from '../../hooks/useForm'
  import useSize from '../../hooks/useSize'
  import CRadio from './CRadio.svelte'

  /**
   * Current value. It is recommended to use `bind:value`.
   * @type {string | number=}
   */
  export let value

  /**
   * The options array.
   * @type {Array<{ label: string; value: string | number }>}
   */
  export let options = []

  /**
   * The size of all radios in this group.
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size

  /**
   * The gutter size between each radio.
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let gutterSize

  /**
   * If this group is in a Form context. Set this prop to `true` will validate current field when selection change.
   * @type {boolean}
   */
  export let validateOnChange = true

  const { contextGutterSize } = useFormProps({ gutterSize })

  const { validateCurrent } = useValidator()

  const mayValidate = async () => {
    if (validateOnChange) {
      await tick()
      validateCurrent && validateCurrent()
    }
  }
  useSize(size)
</script>

<div class={`c-flex c-items-center c-wrap c-gutter-x-${$contextGutterSize}`}>
  {#each options as op}
    <div>
      <CRadio
        bind:value
        selectedValue={op.value}
        label={op.label}
        on:change={mayValidate}
      />
    </div>
  {/each}
</div>
