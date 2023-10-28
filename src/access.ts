export default (initialState: API.UserInfo) => {
  // Здесь вы можете определить права доступа в вашем проекте на основе начальных данных
  // См. документацию: https://umijs.org/docs/max/access
  const canSeeAdmin = !!(initialState?.name !== 'dontHaveAccess');

  const isEmployeeAuthorized = !!(initialState?.name === 'employee');
  return {
    canSeeAdmin,
    isEmployeeAuthorized,
  };
};
