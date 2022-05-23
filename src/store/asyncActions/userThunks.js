import ArticlesServices from '../../services/articlesServices'
import { setUser, setUpdateUser } from '../actions/userAction'

const articlesServices = new ArticlesServices()

export const setNewUser = (data) => (dispath) => {
  articlesServices.postRegistorUser(data).then((res) => {
    dispath(setUser(res))
  })
}

export const setLoginUser = (data) => (dispath) => {
  articlesServices.postLoginUser(data).then((res) => {
    dispath(setUser(res))
  })
}

export const updateUser = (data, token) => (dispath) => {
  articlesServices.putResponce(data, token).then((res) => {
    dispath(setUpdateUser(res))
  })
}
