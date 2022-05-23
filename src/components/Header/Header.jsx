import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import User from '../User'

import classes from './Header.module.scss'

function Header() {
  const { isLogin, userName, image } = useSelector((state) => state.userReducer)

  return (
    <header className={classes.header}>
      <Link className={classes.title} to="/">
        Realworld Blog
      </Link>
      {isLogin ? (
        <>
          <Button className={classes.create}>Create article</Button>
          <button className={classes.user} type="button">
            <User userName={userName} iconUrl={image} dateVisable={false} />
          </button>
          <Button className={classes.logUp} size="large">
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
