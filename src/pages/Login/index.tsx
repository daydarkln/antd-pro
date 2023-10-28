import {
  GoogleOutlined,
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Space, Tabs, message, theme } from 'antd';
import type { CSSProperties } from 'react';
import { useState } from 'react';

type LoginType = 'phone' | 'account';

export default () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>('phone');

  const iconStyles: CSSProperties = {
    marginInlineStart: '16px',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer }}>
        <LoginForm
          // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="Github"
          subTitle="Самая большая в мире платформа для хостинга кода"
          actions={
            <Space>
              Другие способы входа
              <GoogleOutlined style={iconStyles} />
            </Space>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={'account'} tab={'Логин и пароль'} />
            <Tabs.TabPane key={'phone'} tab={'Логин по номеру телефона'} />
          </Tabs>

          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'Имя пользователя: admin или user'}
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите имя пользователя!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'Пароль: ant.design'}
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите пароль!',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'Номер телефона'}
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите номер телефона!',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: 'Неверный формат номера телефона!',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'Пожалуйста, введите код подтверждения'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} Получение кода подтверждения`;
                  }
                  return 'Получить код подтверждения';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите код подтверждения!',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success(
                    'Код подтверждения успешно получен! Код: 1234',
                  );
                }}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Автоматический вход
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              Забыли пароль
            </a>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};
