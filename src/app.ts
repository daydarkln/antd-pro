// Конфигурация во время выполнения

// Глобальная конфигурация начальных данных, используемая для инициализации информации о пользователе и правах в Layout
// Дополнительную информацию смотрите в документации: https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
