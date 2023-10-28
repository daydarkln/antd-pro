import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Главная страница',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Демонстрация прав',
      path: '/access',
      component: './Access',
    },
    {
      name: 'Пример CRUD',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
