const { createVuePlugin } = require('vite-plugin-vue2')
import { resolve } from "node:path"

module.exports = {
  plugins: [createVuePlugin()],
  build: {
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
  },
}
