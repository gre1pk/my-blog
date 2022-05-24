import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../Header'
import ArticlesList from '../ArticlesList'
import Article from '../Article'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import EditForm from '../EditForm'

import classes from './App.module.scss'

function App() {
  return (
    <Router>
      <div className={classes.wrapper}>
        <Header />
        <main className={classes.main}>
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<Article />} />
            {/* add  <Route path="/articles/new" element={<ArticleNewPost />} /> */}
            <Route path="/sign-up" element={<RegisterForm />} />
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/profile" element={<EditForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
