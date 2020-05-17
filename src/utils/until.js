/**
 * API配置文件
 * 医院ip：172.16.8.106:8047
 * 测试服务器ip：120.24.237.109:8089
 * 本地：localhost:8047
 */
const apiPath =
  process.env.NODE_ENV === 'production'
    ? 'https://saving-fish.jackclub.cn'
    : '';

module.exports = {
  apiPath,
};
