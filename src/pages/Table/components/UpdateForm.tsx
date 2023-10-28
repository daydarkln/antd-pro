import {
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';

export interface FormValueType extends Partial<API.UserInfo> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.UserInfo>;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => (
  <StepsForm
    stepsProps={{
      size: 'small',
    }}
    stepsFormRender={(dom, submitter) => {
      return (
        <Modal
          width={640}
          bodyStyle={{ padding: '32px 40px 48px' }}
          destroyOnClose
          title="Настройка правил"
          open={props.updateModalVisible}
          footer={submitter}
          onCancel={() => props.onCancel()}
        >
          {dom}
        </Modal>
      );
    }}
    onFinish={props.onSubmit}
  >
    <StepsForm.StepForm
      initialValues={{
        name: props.values.name,
        nickName: props.values.nickName,
      }}
      title="Основная информация"
    >
      <ProFormText
        width="md"
        name="name"
        label="Название правила"
        rules={[
          { required: true, message: 'Пожалуйста, введите название правила!' },
        ]}
      />
      <ProFormTextArea
        name="desc"
        width="md"
        label="Описание правила"
        placeholder="Пожалуйста, введите минимум пять символов"
        rules={[
          {
            required: true,
            message:
              'Пожалуйста, введите минимум пять символов для описания правила!',
            min: 5,
          },
        ]}
      />
    </StepsForm.StepForm>
    <StepsForm.StepForm
      initialValues={{
        target: '0',
        template: '0',
      }}
      title="Настройка атрибутов правила"
    >
      <ProFormSelect
        width="md"
        name="target"
        label="Объект мониторинга"
        valueEnum={{
          0: 'Таблица 1',
          1: 'Таблица 2',
        }}
      />
      <ProFormSelect
        width="md"
        name="template"
        label="Шаблон правила"
        valueEnum={{
          0: 'Шаблон правила 1',
          1: 'Шаблон правила 2',
        }}
      />
      <ProFormRadio.Group
        name="type"
        width="md"
        label="Тип правила"
        options={[
          {
            value: '0',
            label: 'Сильный',
          },
          {
            value: '1',
            label: 'Слабый',
          },
        ]}
      />
    </StepsForm.StepForm>
    <StepsForm.StepForm
      initialValues={{
        type: '1',
        frequency: 'month',
      }}
      title="Установите расписание"
    >
      <ProFormDateTimePicker
        name="time"
        label="Время начала"
        rules={[
          { required: true, message: 'Пожалуйста, выберите время начала!' },
        ]}
      />
      <ProFormSelect
        name="frequency"
        label="Периодичность"
        width="xs"
        valueEnum={{
          month: 'Месяц',
          week: 'Неделя',
        }}
      />
    </StepsForm.StepForm>
  </StepsForm>
);

export default UpdateForm;
