import { resolve } from 'path'
const config = {
  package: {
    source: resolve(process.cwd(), './src/lib'),
    dir: resolve(process.cwd(), './dist'),
  },
}

export default config
