import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { nodeResolve } from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import svgr from 'vite-plugin-svgr'

dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodeResolve(), peerDepsExternal(), svgr()],
  define: {
    // Some libraries use the global object, even though it doesn't exist in the browser.
    // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
    // https://github.com/vitejs/vite/discussions/5912
    global: {},
    'global.WebSocket': 'globalThis.WebSocket',
    'process.env': {
      ALCHEMY_API_KEY: process.env['ALCHEMY_API_KEY'],
      WALLET_CONNECT_PROJECT_ID: process.env['WALLET_CONNECT_PROJECT_ID'],
    },
  },
})
