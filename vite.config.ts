import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from './config/unocss'
// https://vitejs.dev/config/
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Unocss(),
  ],
  test:{
    globals:true,
    environment:'happy-dom',
    transformMode:{
      web:[/.[tj]sx$/]
    }
  },
  build: {
    rollupOptions,
    // minify: false,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true,  // 生成压缩大小报告
    cssCodeSplit: true, 
    lib: {
      entry: "./src/entry.ts",
      name: "vueUI",
      fileName: "vue-ui",
      // 导出模块格式
      formats: ["es","umd","iife"],// "umd", "iife"
    },
  },
});
