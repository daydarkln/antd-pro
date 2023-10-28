export default (initialState: API.UserInfo) => {
  // Здесь вы можете определить права доступа в вашем проекте на основе начальных данных
  // См. документацию: https://umijs.org/docs/max/access
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  return {
    canSeeAdmin,
  };
};
