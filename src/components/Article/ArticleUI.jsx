import ReactMarkdown from 'react-markdown'
import { Button } from 'antd'

import User from '../User'
import TagList from '../TagList'
import Like from '../Like'

import classes from './Article.module.scss'

function ArticleUI({ article }) {
  const { slug, title, description, body, createdAt, tagList, favoritesCount, author } = article

  return (
    <div className={classes.conteiner}>
      <div className={classes.article}>
        <div className={classes.articleContent}>
          <div className={classes.articleHeader}>
            <p to={`/articles/${slug}`} className={classes.title}>
              {title}
            </p>
            <Like favoritesCount={favoritesCount} />
          </div>
          <div className={classes.tegWrapper}>
            <TagList tagList={tagList} />
          </div>
          <p className={classes.text}>{description}</p>
        </div>
        <div className={classes.articleUser}>
          <User userName={author.username} iconUrl={author.image} date={createdAt} dateVisable />
          <div className={classes.btnGroup}>
            <Button className={classes.delBtn} danger>
              Delete
            </Button>
            <Button className={classes.editBtn}>Edit</Button>
          </div>
        </div>
      </div>
      <div>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ArticleUI
