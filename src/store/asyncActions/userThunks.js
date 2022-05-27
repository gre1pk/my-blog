import ArticlesServices from '../../services/articlesServices'
import { setUser, setUpdateUser, setErrMsg } from '../actions/userAction'

const articlesServices = new ArticlesServices()

export const setNewUser = (data) => (dispath) => {
  articlesServices.postRegistorUser(data).then((res) => {
    dispath(setUser(res))
  })
}

export const setLoginUser = (data) => (dispath) => {
  articlesServices
    .postLoginUser(data)
    .then((res) => {
      dispath(setUser(res))
    })
    .catch((error) => {
      if (error.message === '422') {
        dispath(setErrMsg('Incorrect login or password. Try again.'))
      }
    })
}

export const updateUser = (data, token) => (dispath) => {
  articlesServices.putEditUser(data, token).then((res) => {
    dispath(setUpdateUser(res))
  })
}
