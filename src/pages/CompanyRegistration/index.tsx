import { BetaSchemaForm, ProFormColumnsType } from '@ant-design/pro-components';

type DataItem = {
  name: string;
  state: string;
  title: string;
};

const columns: ProFormColumnsType<DataItem>[][] = [
  [
    {
      title: 'Название',
      dataIndex: 'name',
      valueType: 'text',
      formItemProps: {
        rules: [
          { required: true, message: 'Это поле обязательно для заполнения' },
        ],
      },
      width: 'm',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      valueType: 'text',
      width: 'm',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      valueType: 'text',
      formItemProps: {
        rules: [
          { required: true, message: 'Это поле обязательно для заполнения' },
          {
            pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
            message: 'Пожалуйста, введите корректный номер телефона',
          },
        ],
      },
      width: 'm',
    },
    {
      title: 'Электронная почта',
      dataIndex: 'email',
      valueType: 'text',
      formItemProps: {
        rules: [
          { required: true, message: 'Это поле обязательно для заполнения' },
          {
            type: 'email',
            message: 'Пожалуйста, введите корректный адрес электронной почты',
          },
        ],
      },
      width: 'm',
    },
  ],
  [
    {
      title: 'Отделы',
      dataIndex: 'departments',
      valueType: 'formList',
      colProps: {
        xs: 24,
        sm: 12,
      },
      initialValue: [], // начальные значения для списка отделов
      columns: [
        {
          valueType: 'group',
          columns: [
            {
              title: 'Наименование отдела',
              dataIndex: 'departmentName',
              width: 'md',
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: 'Это поле обязательно для заполнения',
                  },
                ],
              },
              colProps: {
                xs: 24,
                sm: 12,
              },
            },
            // Можно добавить дополнительные поля для отдела, если необходимо
          ],
        },
      ],
    },
  ],
  [
    {
      title: 'Специальности',
      dataIndex: 'workSpecialities',
      valueType: 'formList',
      colProps: {
        xs: 24,
        sm: 12,
      },
      initialValue: [], // начальные значения для списка специальностей
      columns: [
        {
          valueType: 'group',
          columns: [
            {
              title: 'Наименование специальности',
              dataIndex: 'name',
              width: 'md',
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: 'Это поле обязательно для заполнения',
                  },
                ],
              },
              colProps: {
                xs: 24,
                sm: 12,
              },
            },
            {
              title: 'Описание',
              dataIndex: 'description',
              valueType: 'textarea',
              width: 'md',
              colProps: {
                xs: 24,
                sm: 12,
              },
            },
            // Можно добавить дополнительные поля для специальности, если необходимо
          ],
        },
      ],
    },
  ],
  [
    {
      title: 'Сотрудники',
      dataIndex: 'employees',
      valueType: 'formList',
      colProps: {
        xs: 24,
        sm: 12,
      },
      initialValue: [], // начальные значения для списка сотрудников
      columns: [
        {
          valueType: 'group',
          columns: [
            {
              title: 'Имя сотрудника',
              dataIndex: 'employeeFirstName',
              width: 'md',
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: 'Это поле обязательно для заполнения',
                  },
                ],
              },
              colProps: {
                xs: 24,
                sm: 12,
              },
            },
            {
              title: 'Фамилия сотрудника',
              dataIndex: 'employeeLastName',
              width: 'md',
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: 'Это поле обязательно для заполнения',
                  },
                ],
              },
              colProps: {
                xs: 24,
                sm: 12,
              },
            },
            // Можно добавить дополнительные поля для сотрудника, если необходимо
          ],
        },
      ],
    },
  ],
];

export default () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        steps={[
          {
            title: 'Информация о компании',
          },
          {
            title: 'Департаменты',
          },
          {
            title: 'Специальности',
          },
          {
            title: 'Сотрудники',
          },
        ]}
        shouldUpdate={(newValues, oldValues) => {
          if (newValues.title !== oldValues?.title) {
            return true;
          }
          return false;
        }}
        layoutType="StepsForm"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};
