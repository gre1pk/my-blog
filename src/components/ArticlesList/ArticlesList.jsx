import { useEffect } from 'react'
import { Pagination, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import ArticleItem from '../ArticleItem'
import { getArticles } from '../../store/asyncActions/articlesThunks'
import { setPages } from '../../store/actions/articlesAction'

import classes from './ArticlesList.module.scss'

function ArticlesList() {
  const dispatch = useDispatch()
  const { articles, articlesCount, currentPages, loading, error } = useSelector((store) => store.articlesReducer)
  const { token } = useSelector((state) => state.userReducer)

  useEffect(() => {
    dispatch(getArticles(currentPages, token))
  }, [dispatch, currentPages, token])

  const onCurrentPages = (value) => {
    dispatch(setPages(value))
  }

  const articleList = articles.map((el) => (
    <ArticleItem
      key={el.slug}
      slug={el.slug}
      title={el.title}
      description={el.description}
      createdAt={el.createdAt}
      tagList={el.tagList}
      favoritesCount={el.favoritesCount}
      author={el.author}
      favorited={el.favorited}
    />
  ))

  const hasDate = !(loading || error)
  const errorDate = error ? <h3>Возникла ошибка</h3> : null
  const loadDate = loading ? <Spin className={classes.spin} /> : null
  const content = hasDate ? articleList : null
  const pagination = hasDate ? (
    <Pagination
      total={articlesCount}
      defaultPageSize={5}
      showSizeChanger={false}
      current={currentPages}
      onChange={onCurrentPages}
    />
  ) : null

  return (
    <>
      <div className={classes.articleList}>
        {content}
        {errorDate}
        {loadDate}
      </div>
      <div className={classes.pagination}>{pagination}</div>
    </>
  )
}

export default ArticlesList
