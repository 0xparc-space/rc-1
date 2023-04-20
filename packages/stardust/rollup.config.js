import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
//
// import packageJson from './package.json'
import tailwindcss from 'tailwindcss'
import postcss from 'rollup-plugin-postcss'

import tailwindConfig from './tailwind.config.cjs'
import svg from 'rollup-plugin-svg'

export default [
  {
    input: ['./src/index.ts'],
    external: ['react', 'react-dom', 'framer-motion', 'wagmi'],
    output: {
      file: 'dist/esm/index.es.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      typescript({
        useTsconfigDeclarationDir: true,
        exclude: 'node_modules/**',
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        plugins: [tailwindcss(tailwindConfig)],
      }),
      svg(),
    ],
  },
]
