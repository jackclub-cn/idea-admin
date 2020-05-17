/* eslint-disable no-console */
/**
 * 请求方法类型集合
 * 在基本请求类型的基础上，扩展出不同参数类型的专用方法
 */

import until from '@/utils/until';
import Ajax from '@/utils/fetch';

/**
 * 处理url的方法
 * @param {*} url
 */
function getAction(url) {
  url = until.apiPath + url;
  return url;
}

/**
 * get请求，类型默认（application/json）
 * @param {*} url
 * @param {*} params
 */
export function getMethod(url, params, opts) {
  var headers = opts && opts.headers ? opts.headers : '';
  if (headers) {
    opts.headers = {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  } else {
    opts = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  }
  return new Promise((resolve, reject) => {
    Ajax.get(getAction(url), {
      params: params,
      opts,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 普通的post请求，类型默认（application/json）
 * @param {*} url
 * @param {*} params
 */
export function postMethod(url, data, opts) {
  return new Promise((resolve, reject) => {
    Ajax.post(getAction(url), data, opts)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

/**
 * put请求
 * @param {*} url
 * @param {*} params
 */
export function putMethod(url, data, opts) {
  return new Promise((resolve, reject) => {
    Ajax.put(getAction(url), data, opts)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

/**
 * delete请求
 * @param {*} url
 * @param {*} params
 */
export function delMethod(url, data, opts) {
  return new Promise((resolve, reject) => {
    Ajax.delete(getAction(url), data, opts)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

/**
 * post请求
 * 类型：application/x-www-form-urlencoded
 * @param {Object} url
 * @param {Object} data
 * @param {Object} opts
 */
export function postMethodByEncode(url, data, opts) {
  var headers = opts && opts.headers ? opts.headers : '';
  if (headers) {
    opts.headers = {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  } else {
    opts = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  }

  return new Promise((resolve, reject) => {
    Ajax.post(getAction(url), data, opts)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
