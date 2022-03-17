import { defineConfig } from 'umi';

export default defineConfig({
  dynamicImport: {},
  history: { type: 'hash' },
  publicPath: './',
  fastRefresh: {},
  title: '水晶指引站',
  cssLoader: {
    localsConvention: 'camelCase',
  },
  cssModulesTypescriptLoader: {},
});
