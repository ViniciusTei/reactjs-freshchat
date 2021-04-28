import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    typescript({ objectHashIgnoreUnknownHack: false }),
    postcss({
      plugins: [],
      extract: 'styles.css'
    })
  ],
  external: ['react', 'react-dom']
}