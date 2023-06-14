const { createVuePlugin } = require('vite-plugin-vue2')
import { resolve } from "node:path"
import tailwindcss from 'tailwindcss'

const alias = {
    '@': './src',
}

module.exports = {
  plugins: [createVuePlugin()],
  resolve: {
    alias,
  },
  build: {
    target: ['es2015'],
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "@bienici/vue-search",
      fileName: "bienici-vue-search",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    resolve: {
      alias,
    },
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
}
