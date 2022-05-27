import { Link } from 'react-router-dom'

import User from '../User'
import TagList from '../TagList'
import Like from '../Like'

import classes from './ArticleItem.module.scss'

function ArticleItem({ slug, title, description, createdAt, tagList, favoritesCount, author, favorited }) {
  return (
    <div className={classes.article}>
      <div className={classes.articleContent}>
        <div className={classes.articleHeader}>
          <Link to={`/articles/${slug}`} className={classes.title}>
            {title}
          </Link>
          <Like favoritesCount={favoritesCount} favorited={favorited} slug={slug} />
        </div>
        <TagList tagList={tagList} />
        <p className={classes.text}>{description}</p>
      </div>
      <div className={classes.articleUser}>
        <User userName={author.username} iconUrl={author.image} date={createdAt} dateVisable />
      </div>
    </div>
  )
}

export default ArticleItem
