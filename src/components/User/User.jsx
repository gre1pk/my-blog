import PropsType from 'prop-types'

import classes from './User.module.scss'
import userImg from './user-icon.svg'

function User({ userName, iconUrl, date, dateVisable }) {
  const secondaryText = dateVisable ? <span className={classes.secondaryText}>{date}</span> : null
  return (
    <div className={classes.user}>
      <div className={classes.text}>
        <span className={classes.name}>{userName}</span>
        {secondaryText}
      </div>
      <div className={classes.img}>
        <img src={iconUrl} alt={userName} />
      </div>
    </div>
  )
}

User.defaultProps = {
  iconUrl: userImg,
  dateVisable: true,
  date: '',
}

User.protoType = {
  userName: PropsType.string.isRequired,
  dateVisable: PropsType.bool,
  iconUrl: PropsType.string,
  date: PropsType.string,
}

export default User
