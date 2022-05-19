import classes from './Like.module.scss'
import heartOff from './heart-off.svg'

function Like({ favoritesCount }) {
  return (
    <div className={classes.like}>
      <button className={classes.likeHeart} type="button">
        <img src={heartOff} alt="Like" />
      </button>
      <span className={classes.likeCount}>{favoritesCount}</span>
    </div>
  )
}

export default Like
