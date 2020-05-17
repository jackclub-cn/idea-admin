/**
 * request拦截器
 */
import axios from 'axios';
// import { Toast } from 'vant';
import router from '@/router/index.js';
import store from '@/store/store.js';
import { Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
  timeout: null, // 请求超时时间
});
let serviceTips = '服务器超时';

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 设置请求头
    // 设置请求格式
    let headers = config.headers['Content-Type']
      ? config.headers['Content-Type']
      : 'application/json';

    config.headers['Content-Type'] = headers;
    // config.headers['Device'] = 'pc_web';

    if (sessionStorage.getItem('accessToken')) {
      config.headers['Authorization'] = sessionStorage.getItem('accessToken');
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// http response 服务器响应拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error, response) => {
    if (error.response) {
      switch (error.response.status) {
        // case 401:
        //   error.response.data = '系统登录超时！';
        //   break;
        // case 404:
        //   // 资源不存在
        //   error.response.data = '资源不存在';
        //   break;
        case 403:
          // token过期,重新获取token
          // sessionStorage.removeItem('accessToken');
          // sessionStorage.removeItem('userinfo');
          // store.commit('setToken');
          // router.push({
          //   name: 'indexPage',
          // });
          break;
        // case 406:
        //   error.response.data = '头部无携带token';
        //   break;
        // case 412:
        //   error.response.data = '秘钥失效';
        //   sessionStorage.removeItem('tokendata'); // 清除token
        //   break;
        // case 415:
        //   error.response.data = '请求type有误';
        //   break;
        // case 500:
        //   error.response.data = '服务器异常';
        //   break;
        default:
          // error.response.data = error.response.data.message;
          break;
      }
      serviceTips = {
        data: error.response.data.message,
        status: error.response.status,
      };
    }
    // Toast(serviceTips);
    console.log(serviceTips, error, response);

    Message({
      message: serviceTips.data,
      type: 'error',
    });
    return Promise.reject(serviceTips);
  }
);
export default service;
