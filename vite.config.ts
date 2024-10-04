import { defineConfig } from 'vite';
import { globby } from 'globby';
import { viteStaticCopy } from 'vite-plugin-static-copy'

const alwaysExternal = ['@lit/react', 'react'];

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: [
        ...(await globby('./src/components/**/!(*.(styles|test|types|stories)).ts')),
        'src/index.ts',
        'src/themes/dark.css',
        'src/themes/light.css',
        'src/themes/common.css',
      ],
      formats: ['es'],
    },
    cssCodeSplit: true,
    manifest: false,
    rollupOptions: {
      external: alwaysExternal,
      output: {
        entryFileNames: (entryInfo: any) => {
          if (entryInfo.facadeModuleId.includes('components')) {
            const entryPath = entryInfo.facadeModuleId.split('components')[1];
            return `components/${entryPath.replace('ts', 'js')}`;  
          }
          if (entryInfo.facadeModuleId.includes('react')) {
            const entryPath = entryInfo.facadeModuleId.split('react')[1];
            return `react/${entryPath.replace('ts', 'js')}`;  
          }
          return `[name].js`;
        },
        chunkFileNames: `chunks/chunk.[hash].js`,
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/icons',
          dest: 'assets'
        }
      ]
    })
  ]
})