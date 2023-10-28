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
      path: '/login',
      name: 'Логин',
      component: './Login',
      layout: false,
    },
    {
      path: '/employee',
      name: 'Сотрудник',
      access: 'isEmployeeAuthorized',
      redirect: '/login',
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
      access: 'canSeeAdmin',
      routes: [
        {
          path: '/add-company',
          name: 'Добавить компанию',
          component: './CompanyRegistration',
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
        {
          path: '/add-employee',
          name: 'Добавить сотрудника',
          component: './EmployeeRegistration',
        },
      ],
    },
  ],
  npmClient: 'yarn',
});
