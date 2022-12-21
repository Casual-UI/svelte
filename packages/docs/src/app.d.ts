// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  
}

declare namespace svelte.JSX {
  import type { AttributifyAttributes } from '@unocss/preset-attributify'
  interface HTMLAttributes<T> extends AttributifyAttributes {
    [key: string]: any
  }
}

declare module "virtual:casual-scss-theme-vars" {
  const vars: string
  export default vars
}
