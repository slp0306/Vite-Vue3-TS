import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default ({ command, mode }: { command: any; mode: any }) => {
  const envConfig = loadEnv(mode, './');
  const config = {
    base: '/',
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue', 'vue-router'], // 需要自动引入api的库
        dts: resolve(__dirname, 'src/auto-import.d.ts'),
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      postcss: {},
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: envConfig.VITE_HOST,
      port: +envConfig.VITE_PORT,
      open: false,
      https: false,
      ssr: false,
      base: envConfig.VITE_BASE_URL,
      outDir: envConfig.VITE_OUTPUT_DIR,
      proxy: {
        '/proxy': {
          target: envConfig.VITE_API_DOMAIN,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/proxy/, ''),
        },
      },
    },
  };

  return defineConfig(config);
};
