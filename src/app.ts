// Конфигурация во время выполнения

import { RuntimeConfig } from '@umijs/max';

// Глобальная конфигурация начальных данных, используемая для инициализации информации о пользователе и правах в Layout
// Дополнительную информацию смотрите в документации: https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  isEmployeeAuthorized: boolean;
}> {
  return { name: 'admin', isEmployeeAuthorized: true };
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    primaryColor: '#13C2C2',
    layout: 'top',
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    pwa: false,
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    headerHeight: 48,
    splitMenus: true,
  };
};
