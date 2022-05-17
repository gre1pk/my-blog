import ArticlesServices from '../../services/articlesServices'
import { setArticleList, loadError } from '../actions/articlesAction'

const articlesServices = new ArticlesServices()

const getArtickles = (page) => (dispath) => {
  const offset = page * 5 - 5
  articlesServices
    .getArticles(offset)
    .then((res) => dispath(setArticleList(res)))
    .catch(() => dispath(loadError()))
}

export default getArtickles
