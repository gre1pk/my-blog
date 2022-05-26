import ArticlesServices from '../../services/articlesServices'
import { setArticleList, loadError, startLoading } from '../actions/articlesAction'
import { setArticle } from '../actions/articleAction'

const articlesServices = new ArticlesServices()

export const getArticles = (page) => (dispatch) => {
  const offset = page * 5 - 5
  dispatch(startLoading())
  articlesServices
    .getArticles(offset)
    .then((res) => dispatch(setArticleList(res)))
    .catch(() => dispatch(loadError()))
}

export const getArticle = (slug) => (dispatch) => {
  articlesServices.getArticle(slug).then((res) => dispatch(setArticle(res.article)))
}
