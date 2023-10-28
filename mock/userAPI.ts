const users = [
  {
    id: 0,
    name: 'Umi',
    nickName: 'U',
    gender: 'MALE',
    isEmployeeAuthorized: false,
  },
  {
    id: 1,
    name: 'Fish',
    nickName: 'B',
    gender: 'FEMALE',
    isEmployeeAuthorized: true,
  },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
