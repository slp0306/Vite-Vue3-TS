// user.ts
import { postApi } from '@/utils/request';

// 账号密码登录
export const loginByUsername = (params: any) =>
  postApi('/auth/login', params, true);
