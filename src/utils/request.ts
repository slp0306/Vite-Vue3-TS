import Axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';
import { stringify } from 'qs';

const server = Axios.create({
  timeout: 3000,
  withCredentials: true,
});

/**
 * 请求拦截
 */
server.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 如果需要token，此处处理
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
server.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应统一处理
    return response;
  },
  (error) => {
    // 对错误统一处理，弹窗提示
    return Promise.reject(error);
  }
);

/**
 * 封装get请求，在api模块中直接调用
 * url 请求地址
 * params 参数
 */
export const getApi = (url: string, params: any): AxiosPromise => {
  return server({
    url,
    method: 'get',
    params,
  });
};

/**
 * 封装post请求，在api模块直接调用
 * url 请求地址
 * params 参数
 * isQs 是否参数序列化
 */
export const postApi = (
  url: string,
  params?: any,
  isQs?: boolean
): AxiosPromise => {
  return server({
    url,
    method: 'post',
    data: isQs ? stringify(params) : params,
  });
};

// 也可将put，delete进行封装
// 如需额外请求头，也可加参数拓展
