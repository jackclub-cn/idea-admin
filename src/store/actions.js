//不改变状态，只提交(commit) mutation。

//更改缓存页面
export const setKeepAlive = ({commit, para}) => commit('setKeepAlive', para)

