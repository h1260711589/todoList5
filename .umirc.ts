import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/layouts',
      routes: [
        { path: '/', component: '@/pages/List' },
        {
          path: '/editPage', component: '@/pages/Edit',
          routes: [
            { path: '/editPage/addItemPage', component: '@/components/AddItemPage' },
            { path: '/editPage/editNotePage', component: '@/components/EditNotePage' }
          ]
        }
      ]
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  }
});
