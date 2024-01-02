import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: [
        'src/index.ts',
        'src/themes/dark.css',
        'src/themes/light.css',
      ],
      formats: ['es'],
      fileName: 'bundle'
    },
    cssCodeSplit: true,
    manifest: false,
  },
})