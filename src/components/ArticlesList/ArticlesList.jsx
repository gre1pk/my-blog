import { useEffect } from 'react'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import Article from '../Article'
import getArtickles from '../../store/asyncActions/articlesThunks'
import { setPages } from '../../store/actions/articlesAction'

import classes from './ArticlesList.module.scss'

function ArticlesList() {
  const dispatch = useDispatch()
  const { articles, articlesCount, currentPages } = useSelector((store) => store.articlesReduser)

  useEffect(() => {
    dispatch(getArtickles(currentPages))
  }, [dispatch, currentPages])

  const onCurrentPages = (value) => {
    dispatch(setPages(value))
  }

  const articleList = articles.map((el) => {
    return (
      <Article
        key={el.slug}
        title={el.title}
        description={el.description}
        createdAt={el.createdAt}
        tagList={el.tagList}
        favoritesCount={el.favoritesCount}
        author={el.author}
      />
    )
  })

  return (
    <>
      <div className={classes.articleList}>{articleList}</div>
      <div className={classes.pagination}>
        <Pagination total={articlesCount} showSizeChanger={false} current={currentPages} onChange={onCurrentPages} />
      </div>
    </>
  )
}

export default ArticlesList
