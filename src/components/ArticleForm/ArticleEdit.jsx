import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { Spin } from 'antd'

import ArticlesServices from '../../services/articlesServices'
import { getArticle, getArticles } from '../../store/asyncActions/articlesThunks'
import { clearArticle } from '../../store/actions/articleAction'

import ArticleFormUi from './ArticleFormUi'

const articlesServices = new ArticlesServices()

function ArticleEdit() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { article } = useSelector((state) => state.articleReducer)
  const { token } = useSelector((state) => state.userReducer)
  useEffect(() => {
    dispatch(getArticle(id))
    return () => dispatch(clearArticle())
  }, [id, dispatch])

  const onGetArticle = async (data) => {
    await articlesServices.putUpdateArticle(data, id, token)
    await dispatch(getArticles())
    await navigate('/')
  }

  return article ? (
    <ArticleFormUi
      titleForm="Edit article"
      titleAtr={article.title}
      descriptionArt={article.description}
      textArt={article.body}
      tagListArt={article.tagList}
      onGetArticle={onGetArticle}
    />
  ) : (
    <Spin />
  )
}

export default ArticleEdit
