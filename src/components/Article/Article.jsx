import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router'
import { Spin } from 'antd'

import ArticlesServices from '../../services/articlesServices'
import { getArticle, getArticles } from '../../store/asyncActions/articlesThunks'
import { clearArticle } from '../../store/actions/articleAction'

import ArticleUI from './ArticleUI'

const articlesServices = new ArticlesServices()

function Article() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { article } = useSelector((store) => store.articleReducer)
  const { token } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getArticle(id, token))

    return () => dispatch(clearArticle())
  }, [id, dispatch, token])

  const onTogleDel = async () => {
    await articlesServices.deleteArticle(id, token).catch(() => {
      dispatch(getArticles())
      navigate('/')
    })
  }

  return article ? <ArticleUI article={article} idPage={id} onTogleDel={onTogleDel} /> : <Spin />
}

export default Article
