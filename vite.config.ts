import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'bundle'
    },
    manifest: true,
  },
})