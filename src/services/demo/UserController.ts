/* eslint-disable */
// Этот файл сгенерирован автоматически с использованием OneAPI, пожалуйста, не редактируйте его вручную!
import { request } from '@umijs/max';

/** В этом месте отсутствует комментарий от backend GET /api/v1/queryUserList */
export async function queryUserList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>('/api/v1/queryUserList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** В этом месте отсутствует комментарий от backend POST /api/v1/user */
export async function addUser(
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>('/api/v1/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** В этом месте отсутствует комментарий от backend GET /api/v1/user/${param0} */
export async function getUserDetail(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/user/${param0}`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

/** В этом месте отсутствует комментарий от backend PUT /api/v1/user/${param0} */
export async function modifyUser(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** В этом месте отсутствует комментарий от backend DELETE /api/v1/user/${param0} */
export async function deleteUser(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/user/${param0}`, {
    method: 'DELETE',
    params: { ...params },
    ...(options || {}),
  });
}
