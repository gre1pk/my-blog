import ReactMarkdown from 'react-markdown'
import { Button, Popconfirm } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import User from '../User'
import TagList from '../TagList'
import Like from '../Like'

import classes from './Article.module.scss'

function ArticleUI({ article, idPage, onTogleDel }) {
  const { slug, title, description, body, createdAt, tagList, favoritesCount, author, favorited } = article

  const { userName } = useSelector((state) => state.userReducer)

  return (
    <div className={classes.conteiner}>
      <div className={classes.article}>
        <div className={classes.articleContent}>
          <div className={classes.articleHeader}>
            <p to={`/articles/${slug}`} className={classes.title}>
              {title}
            </p>
            <Like favoritesCount={favoritesCount} favorited={favorited} slug={slug} />
          </div>
          <div className={classes.tegWrapper}>
            <TagList tagList={tagList} />
          </div>
          <p className={classes.text}>{description}</p>
        </div>
        <div className={classes.articleUser}>
          <User userName={author.username} iconUrl={author.image} date={createdAt} dateVisable />
          {userName === author.username ? (
            <div className={classes.btnGroup}>
              <Popconfirm
                title="Are you sure to delete this article?"
                placement="right"
                okText="Yes"
                cancelText="No"
                onConfirm={() => onTogleDel()}
              >
                <Button className={classes.delBtn} danger>
                  Delete
                </Button>
              </Popconfirm>
              <Link to={`/articles/${idPage}/edit`}>
                <Button className={classes.editBtn}>Edit</Button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  )
}
ArticleUI.defaultProps = {
  onTogleDel: () => {},
}
ArticleUI.propTypes = {
  article: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    favoritesCount: PropTypes.number,
    author: PropTypes.shape(),
    favorited: PropTypes.bool,
  }).isRequired,
  idPage: PropTypes.string.isRequired,
  onTogleDel: PropTypes.func,
}

export default ArticleUI
