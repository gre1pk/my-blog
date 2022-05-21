import { Button } from 'antd'
import { Link } from 'react-router-dom'

import User from '../User'

import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Realworld Blog</h1>
      <Button className={classes.create}>Create article</Button>
      <button className={classes.user} type="button">
        <User userName="John Doe" dateVisable={false} />
      </button>
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
      <Button className={classes.logUp} size="large">
        Log Out
      </Button>
    </header>
  )
}

export default Header
