import type { StorybookConfig } from "@storybook/web-components-vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: (chunkInfo) => {
              let chunkName = chunkInfo.name || 'chunk';
              chunkName = chunkName.replace("_", '');
              return `${chunkName}-[hash].js`;
            }
          }
        }
      },
      plugins: [
        viteStaticCopy({
          targets: [
            {
              src: 'assets/icons',
              dest: 'assets'
            }
          ]
        }) 
      ]
    });
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
