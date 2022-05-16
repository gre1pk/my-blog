import Header from '../Header'
import ArticlesList from '../ArticlesList'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <ArticlesList />
      </main>
    </div>
  )
}

export default App
