import { Toast } from 'vant';

/**
 * 参数校验
 * @param {*参数对象} params
 * @param {*指定需要校验的字段} necessarys
 * @param {*指定校验字段的校验规则} msg
 */

export function paramsValid(params, necessarys, msg) {
  var status = true;
  for (var key in params) {
    if (necessarys.includes(key)) {
      var valid = msg[key];
      for (var i = 0; i < valid.length; i++) {
        // console.log('status',valid[i].reg,params[key],params,key);
        if (!valid[i].reg.test(params[key])) {
          // Message({
          //     message:valid[i].msg,
          //     type:'error'
          // })
          status = false;
          break;
        }
        if (!status) {
          break;
        }
      }
    }
    if (!status) {
      break;
    }
  }
  return status;
}

/**
 * 日期对象转 yyyy-MM-dd HH:mm
 * @param {*} date
 */
export function dealDatetime(date) {
  var dates = new Date(date);
  var year = dates.getFullYear();
  var month = dates.getMonth() + 1;
  var days = dates.getDate();
  var hours = dates.getHours();
  var minute = dates.getMinutes();
  return year + '-' + month + '-' + days + ' ' + hours + ':' + minute;
}

/**
 * 日期对象转 yyyy-MM-dd HH:mm:ss
 * @param {*} date
 */
export function dealDatetime2(date) {
  var dates = new Date(date);
  var year = dates.getFullYear();
  var month = dates.getMonth() + 1;
  var days = dates.getDate();
  var hours = dates.getHours();
  var minute = dates.getMinutes();
  var second = dates.getSeconds();
  return (
    year + '-' + month + '-' + days + ' ' + hours + ':' + minute + ':' + second
  );
}

/**
 * 实现正整数约分
 * @param {*} m
 * @param {*} n
 * m,n为正整数的分子和分母
 */
export function reductionTo(m, n) {
  var arr = [];
  if (!isInteger(m) || !isInteger(n)) {
    console.log('m和n必须为整数');
    return;
  } else if (m <= 0 || n <= 0) {
    console.log('m和n必须大于0');
    return;
  }
  var a = m;
  var b = n;
  a >= b ? ((a = m), (b = n)) : ((a = n), (b = m));
  if (m != 1 && n != 1) {
    for (var i = b; i >= 2; i--) {
      if (m % i == 0 && n % i == 0) {
        m = m / i;
        n = n / i;
      }
    }
  }
  arr[0] = m;
  arr[1] = n;
  return arr;
}

//判断一个数是否为整数
function isInteger(obj) {
  return obj % 1 === 0;
}

/**
 * px转rem
 * @param {*} px
 */
export function px2rem(px) {
  return px / (2048 / 16);
  // return px;
}

/**
 * 生成unid
 */
export function guid() {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4() +
    '-local'
  );
}
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 将时间的毫秒数去掉
 */
export function splitDateLast(str) {
  var newStr = str;
  if (str && str.length > 19) {
    return newStr.substring(0, 19);
  }
  return newStr;
}

/**
 * 获取当前的时间yyyy-MM-dd
 */
export function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return (
    year +
    '-' +
    (month > 10 ? month : '0' + month) +
    '-' +
    (day > 10 ? day : '0' + day)
  );
}
