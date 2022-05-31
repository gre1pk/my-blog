import ArticlesServices from '../../services/articlesServices'
import { setArticleList, loadError, startLoading } from '../actions/articlesAction'
import { setArticle, setError } from '../actions/articleAction'

const articlesServices = new ArticlesServices()

export const getArticles = (page, token) => (dispatch) => {
  const offset = page * 5 - 5
  dispatch(startLoading())
  articlesServices
    .getArticles(offset, token)
    .then((res) => dispatch(setArticleList(res)))
    .catch(() => dispatch(loadError()))
}

export const getArticle = (slug, token) => (dispatch) => {
  articlesServices
    .getArticle(slug, token)
    .then((res) => dispatch(setArticle(res.article)))
    .catch(() => dispatch(setError()))
}
