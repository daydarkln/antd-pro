import { defineConfig } from '@umijs/max';

export default defineConfig({
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  locale: {
    default: 'ru-RU',
  },
  routes: [
    {
      path: '/employee',
      name: 'Сотрудник',
      routes: [
        {
          path: '/employee/login',
          name: 'Логин',
          component: './Login',
        },
      ],
    },
    {
      path: '/',
      name: 'Менеджер',
      routes: [
        {
          path: '/add-company',
          name: 'Добавить компанию',
          component: './CompanyRegistration',
        },
        {
          path: '/login',
          name: 'Логин',
          component: './Login',
          layout: false,
        },
        {
          name: 'Главная страница',
          path: '/',
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
    },
  ],
  npmClient: 'yarn',
});
