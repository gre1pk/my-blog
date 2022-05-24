import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import User from '../User'
import { setLogOut } from '../../store/actions/userAction'

import classes from './Header.module.scss'

function Header() {
  const { isLogin, userName, image } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(setLogOut())
  }

  return (
    <header className={classes.header}>
      <Link className={classes.title} to="/">
        Realworld Blog
      </Link>
      {isLogin ? (
        <>
          <Button className={classes.create}>Create article</Button>
          <Link className={classes.user} to="/profile">
            <User userName={userName} iconUrl={image} dateVisable={false} />
          </Link>
          <Button className={classes.logUp} size="large" onClick={onLogOut}>
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Link to="/sign-in">
            <Button className={classes.signIn} type="link">
              Sign In
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button className={classes.signUp} size="large">
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </header>
  )
}

export default Header
