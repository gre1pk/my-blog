import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import ArticlesServices from '../../services/articlesServices'

import classes from './Like.module.scss'
import heartOff from './heart-off.svg'
import heartOn from './heart-on.svg'

const articlesServices = new ArticlesServices()

function Like({ favoritesCount, favorited, slug }) {
  const [isLike, setIsLike] = useState(favorited)
  const [count, setCount] = useState(favoritesCount)
  const { isLogin, token } = useSelector((state) => state.userReducer)
  useEffect(() => {
    setIsLike(favorited)
    setCount(favoritesCount)
  }, [favoritesCount, favorited])

  const onLikeClick = () => {
    if (!isLike) {
      setCount((prev) => prev + 1)
      setIsLike(true)
      articlesServices.postFavoriteArticle(slug, token)
    } else {
      setIsLike(false)
      setCount((prev) => prev - 1)
      articlesServices.deleteFavoriteArticle(slug, token)
    }
  }

  const onSelectLike = isLike ? heartOn : heartOff

  return (
    <div className={classes.like}>
      <button className={classes.likeHeart} type="button" disabled={!isLogin} onClick={onLikeClick}>
        <img src={onSelectLike} alt="Like" />
      </button>
      <span className={classes.likeCount}>{count}</span>
    </div>
  )
}

export default Like
