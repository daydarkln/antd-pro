import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: 'Пример работы с правами',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>Эту кнопку видят только администраторы</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
