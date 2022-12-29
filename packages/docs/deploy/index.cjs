const path = require('path')
const aliOSSStaicWebDeploy = require('ali-oss-static-web-deploy')

const {
  ALI_OSS_REGION,
  ALI_OSS_KEY_ID,
  ALI_OSS_KEY_SECRET,
} = process.env

aliOSSStaicWebDeploy({
  region: ALI_OSS_REGION,
  accessKeyId: ALI_OSS_KEY_ID,
  accessKeySecret: ALI_OSS_KEY_SECRET,
  bucket: 'casual-ui-svelte',
  staticWebAppPath: path.resolve(__dirname, '../build'),
})
