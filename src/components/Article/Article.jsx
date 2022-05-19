import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { getArticle } from '../../store/asyncActions/articlesThunks'
import { clearArticle } from '../../store/actions/articleAction'

import ArticleUI from './ArticleUI'

function Article() {
  const { id } = useParams()
  const dispath = useDispatch()
  const { article } = useSelector((store) => store.articleReducer)

  useEffect(() => {
    dispath(getArticle(id))

    return () => dispath(clearArticle())
  }, [id, dispath])

  return article ? <ArticleUI article={article} /> : <h1>loading</h1>
}

export default Article
