export const setUser = ({ user }) => ({ type: 'SET_USER', payload: user })

export const setUpdateUser = ({ user }) => ({ type: 'USER_UPDATE', payload: user })

export const setLogOut = () => ({ type: 'LOG_OUT' })

export const setErrMsg = (msg) => ({ type: 'ERR_MSG', payload: msg })

export const setClearErrMsg = () => ({ type: 'CLEAR_ERR_MSG' })
