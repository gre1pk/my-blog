import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import ArticlesServices from '../../services/articlesServices'
import { getArticles } from '../../store/asyncActions/articlesThunks'

import ArticleFormUi from './ArticleFormUi'

const articlesServices = new ArticlesServices()

function ArticleNew() {
  const { token } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onGetArticle = async (data) => {
    await articlesServices.postCreateArticle(data, token)
    await dispatch(getArticles())
    await navigate('/')
  }
  return <ArticleFormUi titleForm="Create new article" onGetArticle={onGetArticle} />
}

export default ArticleNew
