---
title: Form & Form Item
componentName: 
  - form/CForm
  - form/CFormItem
---

## Basic usage

```svelte live
<script lang="ts">
  import {
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
  } from '@casual-ui/svelte'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]

</script>

<CForm>
  <CFormItem label="Name">
    <CInput bind:value={name} placeholder="Your name" />
  </CFormItem>
  <CFormItem label="Gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
```

## Control sizes

```svelte live
<script lang="ts">
  import {
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
  } from '@casual-ui/svelte'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]

  let size: 'xs' | 'sm' | 'md' | 'xl' | 'lg' = 'md'
  const sizes = [
    {
      label: 'xs',
      value: 'xs',
    },
    {
      label: 'sm',
      value: 'sm',
    },
    {
      label: 'md',
      value: 'md',
    },
    {
      label: 'lg',
      value: 'lg',
    },
    {
      label: 'xl',
      value: 'xl',
    },
  ]
</script>

<CForm {size}>
  <CFormItem label="Sizes" col={12}>
    <CRadioGroup bind:value={size} options={sizes} />
  </CFormItem>
  <CFormItem label="Name">
    <CInput bind:value={name} placeholder="Your name" />
  </CFormItem>
  <CFormItem label="Gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
```

## Gutter sizes

```svelte live
<script lang="ts">
  import {
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
  } from '@casual-ui/svelte'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]

  let size: 'xs' | 'sm' | 'md' | 'xl' | 'lg' = 'md'
  const sizes = [
    {
      label: 'xs',
      value: 'xs',
    },
    {
      label: 'sm',
      value: 'sm',
    },
    {
      label: 'md',
      value: 'md',
    },
    {
      label: 'lg',
      value: 'lg',
    },
    {
      label: 'xl',
      value: 'xl',
    },
  ]
</script>

<CForm gutterSize={size}>
  <CFormItem label="Gutter size" col={12}>
    <CRadioGroup bind:value={size} options={sizes} />
  </CFormItem>
  <CFormItem label="Name">
    <CInput bind:value={name} placeholder="Your name" />
  </CFormItem>
  <CFormItem label="Gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
```

## Label width

```svelte live
<script lang="ts">
  import {
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
  } from '@casual-ui/svelte'

  let labelWidth = '80px'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]
</script>

<CForm {labelWidth}>
  <CFormItem label="Label width">
    <CInput bind:value={labelWidth} placeholder="Label width" />
  </CFormItem>
  <CFormItem label="Name">
    <CInput bind:value={name} placeholder="Your name" />
  </CFormItem>
  <CFormItem label="Gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
```

## Label align

```svelte live
<script lang="ts">
  import {
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
  } from '@casual-ui/svelte'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]

  let labelAlign: 'left' | 'center' | 'right' = 'left'
  const aligns = [
    {
      label: 'left',
      value: 'left',
    },
    {
      label: 'center',
      value: 'center',
    },
    {
      label: 'right',
      value: 'right',
    },
  ]
</script>

<CForm {labelAlign}>
  <CFormItem label="Gutter size" col={12}>
    <CRadioGroup bind:value={labelAlign} options={aligns} />
  </CFormItem>
  <CFormItem label="Name">
    <CInput bind:value={name} placeholder="Your name" />
  </CFormItem>
  <CFormItem label="Gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
```

## Label direction

```svelte live
<script lang="ts">
  import {
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
  } from '@casual-ui/svelte'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]

  let labelDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' =
    'row'
  const directions = [
    {
      label: 'row',
      value: 'row',
    },
    {
      label: 'row-reverse',
      value: 'row-reverse',
    },
    {
      label: 'column',
      value: 'column',
    },
    {
      label: 'column-reverse',
      value: 'column-reverse',
    },
  ]
</script>

<CForm {labelDirection}>
  <CFormItem label="Gutter size" col={12}>
    <CRadioGroup bind:value={labelDirection} options={directions} />
  </CFormItem>
  <CFormItem label="Name">
    <CInput bind:value={name} placeholder="Your name" />
  </CFormItem>
  <CFormItem label="Gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
```

## Normal (sync) Validation

To make validation work. The `value`, `rules` prop need to be set.

And the CFormItem's `field` prop also needed.

The `rules` is an object that contains every field rules. Its' type look like this:

```ts
type Validator = (val: any) => string | false | Promise<string | false>
interface Rules {
  [key: string]: Array<Validator>
}
```

Each rule can be a function that receive current value and return a string message or a `false` or a `Promise<string | false>`.

- The string message will be shown at the bottom of form item.
- `false` means no error.
- `Promise<string | false>` means a async validation.

```svelte live
<script lang="ts">
  import {
    CButton,
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
    openNotification,
  } from '@casual-ui/svelte'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]

  let form: CForm

  const rules = {
    name: [(v: string) => (v ? false : 'Please enter name')],
    gender: [(v: any) => (v === '' ? 'Please select gender' : false)],
    birthday: [(v: any) => (v ? false : 'Please select birthday')],
    industry: [(v: any) => (v === '' ? 'Please select industry' : false)],
  }

  function onSubmit() {
    form.validateAll().then(() => {
      openNotification({
        theme: 'secondary',
        title: 'Congratulations!',
        message: 'Form validation passed',
      })
    })
  }
  function onReset() {
    form.clearAll()
  }
</script>

<CForm
  bind:this={form}
  value={{
    name,
    gender,
    birthday,
    industry,
  }}
  {rules}
>
  <CFormItem label="Name" field="name">
    <CInput bind:value={name} placeholder="Your name" />
  </CFormItem>
  <CFormItem label="Gender" field="gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday" field="birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry" field="industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
<div class="c-flex c-justify-end c-mt-xl c-gutter-x-sm">
  <div>
    <CButton label="Reset" outlined on:click={onReset} />
  </div>
  <div>
    <CButton label="Submit" on:click={onSubmit} />
  </div>
</div>
```

## Async validation

To use validation the async validation. 

The rule item need to be a function that return a `Promise<string | false>`. For example:

```js
const rule = async function (v) {
  return await someApiValidation(v)
}
```

```svelte live
<script lang="ts">
  import {
    CButton,
    CDatePicker,
    CForm,
    CFormItem,
    CInput,
    CRadioGroup,
    CSelect,
    openNotification,
  } from '@casual-ui/svelte'

  let name = ''

  let gender = ''

  let industry = ''

  let birthday: Date

  let validating = false
  let nameLoading = false

  const genderOptions = [
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ]

  const industryOptions = [
    { label: 'IT', value: 0 },
    { label: 'Medical', value: 1 },
    { label: 'Transport', value: 2 },
    { label: 'Education', value: 3 },
  ]

  let form: CForm

  const rules = {
    name: [
      (v: string) =>
        new Promise<string | false>(resolve => {
          nameLoading = true
          setTimeout(() => {
            resolve(v ? false : 'Please enter name')
            nameLoading = false
          }, 2000)
        }),
    ],
    gender: [(v: any) => (v === '' ? 'Please select gender' : false)],
    birthday: [(v: any) => (v ? false : 'Please select birthday')],
    industry: [(v: any) => (v === '' ? 'Please select industry' : false)],
  }

  function onSubmit() {
    form.validateAll().then(() => {
      openNotification({
        title: 'Congratulations!',
        message: 'Form validation passed',
      })
    })
  }
  function onReset() {
    form.clearAll()
  }
</script>

<CForm
  bind:this={form}
  value={{
    name,
    gender,
    birthday,
    industry,
  }}
  {rules}
  bind:validating
>
  <CFormItem label="Name" field="name">
    <CInput bind:value={name} placeholder="Your name" loading={nameLoading} />
  </CFormItem>
  <CFormItem label="Gender" field="gender">
    <CRadioGroup options={genderOptions} bind:value={gender} />
  </CFormItem>
  <CFormItem label="Birthday" field="birthday">
    <CDatePicker
      bind:value={birthday}
      format="MM/DD YYYY"
      placeholder="Your birthday"
    />
  </CFormItem>
  <CFormItem label="Industry" field="industry">
    <CSelect
      bind:value={industry}
      options={industryOptions}
      placeholder="Your industry"
    />
  </CFormItem>
</CForm>
<div class="c-flex c-justify-end c-mt-xl c-gutter-x-sm">
  <div>
    <CButton label="Reset" outlined on:click={onReset} />
  </div>
  <div>
    <CButton label="Submit" on:click={onSubmit} loading={validating} />
  </div>
</div>
```