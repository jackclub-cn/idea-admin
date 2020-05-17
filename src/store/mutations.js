//用于操作state的唯一途径

//改变缓存页面数组
export const setKeepAlive = (state, para) => {
  state.keepAlive = para;
}