import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import UserAccount from './components/UserAccount'
import Header from './components/Header'
import Home from './pages/Home'
import Article from './pages/Article'
import Topics from './pages/Topics'
import Topic from './pages/Topic'
import NewArticle from './pages/NewArticle'
import NewTopic from './pages/NewTopic'
import Error from './components/Error'

function App() {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    setUserData({ username: 'tickle122' })
  }, [])
  const err = { msg: 'Page you are looking for is not found' }
  return (
    <UserAccount userData={userData}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<Article />} />
        <Route path='/topics/' element={<Topics />} />
        <Route path='/topics/:topic' element={<Topic />} />
        <Route path='topics/new-topic' element={<NewTopic />} />
        <Route path='/articles/new-article' element={<NewArticle />} />
        <Route path='/*' element={<Error err={err} />} />
      </Routes>
    </UserAccount>
  )
}

export default App
