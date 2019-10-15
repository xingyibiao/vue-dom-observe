import baseConfig from './rollup.base'

const esmConfig = Object.assign(baseConfig, {
  output: {
    name: 'esm',
    file: './dist/index.esm.js',
    format: 'esm',
  }
})

export default esmConfig
