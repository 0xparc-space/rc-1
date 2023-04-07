import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.d.ts',
    },
  ],

  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    nodeResolve(),
    peerDepsExternal(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],

  external: ['react', 'wagmi', 'ethers', '@headlessui/react'],
}
