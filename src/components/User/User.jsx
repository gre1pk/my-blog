import PropsType from 'prop-types'

import dateFormating from '../../handlers/formatingDate'

import classes from './User.module.scss'
import userImg from './user-icon.svg'

function User({ userName, iconUrl, date, dateVisable }) {
  const dateFormat = dateFormating(new Date(date))
  const secondaryText = dateVisable ? <span className={classes.secondaryText}>{dateFormat}</span> : null
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
  date: '0',
}

User.propTypes = {
  userName: PropsType.string.isRequired,
  dateVisable: PropsType.bool,
  iconUrl: PropsType.string,
  date: PropsType.string,
}

export default User
