import { Pagination } from 'antd'

import Article from '../Article'

import classes from './ArticlesList.module.scss'

function ArticlesList() {
  return (
    <>
      <div className={classes.articleList}>
        <Article />
        <Article />
      </div>
      <div className={classes.pagination}>
        <Pagination total={50} />
      </div>
    </>
  )
}

export default ArticlesList
