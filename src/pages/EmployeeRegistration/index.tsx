import { BetaSchemaForm, ProFormColumnsType } from '@ant-design/pro-components';

type DataItem = {
  name: string;
  state: string;
  title: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: 'Идентификатор',
    dataIndex: 'id',
    valueType: 'text',
    formItemProps: {
      rules: [
        { required: true, message: 'Это поле обязательно для заполнения' },
      ],
    },
    width: 'm',
    hideInForm: true, // Скрыть это поле в форме, если вы не хотите, чтобы пользователи его редактировали
  },
  {
    title: 'Имя',
    dataIndex: 'firstName',
    valueType: 'text',
    formItemProps: {
      rules: [
        { required: true, message: 'Это поле обязательно для заполнения' },
      ],
    },
    width: 'm',
  },
  {
    title: 'Фамилия',
    dataIndex: 'lastName',
    valueType: 'text',
    formItemProps: {
      rules: [
        { required: true, message: 'Это поле обязательно для заполнения' },
      ],
    },
    width: 'm',
  },
  {
    title: 'Должность',
    dataIndex: 'position',
    valueType: 'text',
    formItemProps: {
      rules: [
        { required: true, message: 'Это поле обязательно для заполнения' },
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
  {
    title: 'ID компании',
    dataIndex: 'companyId',
    valueType: 'select',
    valueEnum: {}, // Здесь вы должны передать список доступных компаний
    formItemProps: {
      rules: [
        { required: true, message: 'Это поле обязательно для заполнения' },
      ],
    },
    width: 'm',
  },
  {
    title: 'ID отдела',
    dataIndex: 'departmentId',
    valueType: 'select',
    valueEnum: {}, // Здесь вы должны передать список доступных отделов
    formItemProps: {
      rules: [
        { required: true, message: 'Это поле обязательно для заполнения' },
      ],
    },
    width: 'm',
  },
  {
    title: 'ID специальности',
    dataIndex: 'workSpecialityId',
    valueType: 'select',
    valueEnum: {}, // Здесь вы должны передать список доступных специальностей
    formItemProps: {
      rules: [
        { required: true, message: 'Это поле обязательно для заполнения' },
      ],
    },
    width: 'm',
  },
];

export default () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        shouldUpdate={(newValues, oldValues) => {
          if (newValues.title !== oldValues?.title) {
            return true;
          }
          return false;
        }}
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};
