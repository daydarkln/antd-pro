import services from '@/services/demo';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Button, ConfigProvider, Divider, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';

import ruRU from 'antd/locale/ru_RU';

const { addUser, queryUserList, deleteUser, modifyUser } =
  services.UserController;

/**
 * Добавить узел
 * @param fields
 */
const handleAdd = async (fields: API.UserInfo) => {
  const hide = message.loading('Добавление...');
  try {
    await addUser({ ...fields });
    hide();
    message.success('Успешно добавлено');
    return true;
  } catch (error) {
    hide();
    message.error('Ошибка добавления, пожалуйста, попробуйте снова!');
    return false;
  }
};

/**
 * Обновить узел
 * @param fields поля для обновления
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('Настройка...');
  try {
    await modifyUser(
      {
        userId: fields.id || '',
      },
      {
        name: fields.name || '',
        nickName: fields.nickName || '',
        email: fields.email || '',
      },
    );
    hide();
    message.success('Настройка успешно завершена');
    return true;
  } catch (error) {
    hide();
    message.error('Ошибка настройки, пожалуйста, попробуйте снова');
    return false;
  }
};

/**
 * Удалить узел
 * @param selectedRows выбранные строки
 */
const handleRemove = async (selectedRows: API.UserInfo[]) => {
  const hide = message.loading('Удаление...');
  if (!selectedRows) return true;
  try {
    await deleteUser({
      userId: selectedRows.find((row) => row.id)?.id || '',
    });
    hide();
    message.success('Успешно удалено, страница скоро обновится');
    return true;
  } catch (error) {
    hide();
    message.error('Ошибка удаления, пожалуйста, попробуйте снова');
    return false;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TableList: React.FC<unknown> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const [row, setRow] = useState<API.UserInfo>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);
  const columns: ProDescriptionsItemProps<API.UserInfo>[] = [
    {
      title: 'Имя',
      dataIndex: 'name',
      tip: 'Имя является уникальным ключом',
      formItemProps: {
        rules: [
          {
            required: true,
            message: 'Имя является обязательным полем',
          },
        ],
      },
    },
    {
      title: 'Никнейм',
      dataIndex: 'nickName',
      valueType: 'text',
    },
    {
      title: 'Пол',
      dataIndex: 'gender',
      hideInForm: true,
      valueEnum: {
        0: { text: 'Мужчина', status: 'MALE' },
        1: { text: 'Женщина', status: 'FEMALE' },
      },
    },
    {
      title: 'Операции',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            Настроить
          </a>
          <Divider type="vertical" />
          <a href="">Подписаться на оповещения</a>
        </>
      ),
    },
  ];
  return (
    <PageContainer
      header={{
        title: 'Пример CRUD',
      }}
    >
      <ProTable<API.UserInfo>
        headerTitle="Таблица запросов"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            onClick={() => handleModalVisible(true)}
          >
            Создать
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryUserList({
            ...params,
            sorter,
            filter,
          });
          return {
            data: data?.list || [],
            success,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              Выбрано{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              элементов&nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            Удалить выбранное
          </Button>
          <Button type="primary">Подтвердить выбранное</Button>
        </FooterToolbar>
      )}
      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      >
        <ProTable<API.UserInfo, API.UserInfo>
          onSubmit={async (value) => {
            const success = await handleAdd(value);
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="id"
          type="form"
          columns={columns}
        />
      </CreateForm>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}

      <Drawer
        width={600}
        open={!!row}
        onClose={() => {
          setRow(undefined);
        }}
        closable={false}
      >
        {row?.name && (
          <ProDescriptions<API.UserInfo>
            column={2}
            title={row?.name}
            request={async () => ({
              data: row || {},
            })}
            params={{
              id: row?.name,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default () => {
  return (
    <ConfigProvider locale={ruRU}>
      <TableList />
    </ConfigProvider>
  );
};
