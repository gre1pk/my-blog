import User from '../User'

import classes from './Article.module.scss'
import heartOff from './heart-off.svg'

function Article() {
  return (
    <div className={classes.article}>
      <div className={classes.articleContent}>
        <div className={classes.articleHeader}>
          <a href="/" className={classes.title}>
            Some article title
          </a>
          <div className={classes.like}>
            <button className={classes.likeHeart} type="button">
              <img src={heartOff} alt="" />
            </button>
            <span className={classes.likeCount}>12</span>
          </div>
        </div>
        <div className={classes.tegWrapper}>
          <span className={classes.tag}>Teg1</span>
          <span className={classes.tag}>Teg2</span>
        </div>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At non ipsum odio nisi alias pariatur consequuntur
          placeat repudiandae adipisci, quo et, vitae sapiente? Cupiditate, quas magnam. Repellat eveniet aliquid
          quibusdam!
        </p>
      </div>
      <div className={classes.articleUser}>
        <User userName="Ivan Vasilevich" date="March 5, 2020" dateVisable />
      </div>
    </div>
  )
}

export default Article
