import User from '../User'

import classes from './ArticleItem.module.scss'
import heartOff from './heart-off.svg'

function ArticleItem({ title, description, body, createdAt, tagList, favorited, favoritesCount, author }) {
  const tags = tagList
    ? tagList.map((el) => (
        <span className={classes.tag} key={Math.random() * 60000000}>
          {el}
        </span>
      ))
    : null
  return (
    <div className={classes.article}>
      <div className={classes.articleContent}>
        <div className={classes.articleHeader}>
          <a href="/" className={classes.title}>
            {title}
          </a>
          <div className={classes.like}>
            <button className={classes.likeHeart} type="button">
              <img src={heartOff} alt="Like" />
            </button>
            <span className={classes.likeCount}>{favoritesCount}</span>
          </div>
        </div>
        <div className={classes.tegWrapper}>{tags}</div>
        <p className={classes.text}>{description}</p>
      </div>
      <div className={classes.articleUser}>
        <User userName={author.username} iconUrl={author.image} date={createdAt} dateVisable />
      </div>
    </div>
  )
}

export default ArticleItem
