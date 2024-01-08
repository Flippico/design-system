import { defineConfig } from 'vite';
import pkgMinifyHTML from 'rollup-plugin-minify-html-literals';
import { uglify } from 'rollup-plugin-uglify';
//@ts-ignore
const minifyHTML = pkgMinifyHTML.default;

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  build: {
    outDir: 'dist-cdn',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      input: {
        bundle: './src/index.ts',
        darkcss: './src/themes/dark.css',
        lightcss: './src/themes/light.css',
        commoncss: './src/themes/common.css',
      },
      output: {
        dir: './dist-cdn',
        entryFileNames: 'bundle.js',
        format: "es",
      },
      preserveEntrySignatures: false,
      plugins: [
        minifyHTML(),
        uglify(),
      ]
    },
  },
})