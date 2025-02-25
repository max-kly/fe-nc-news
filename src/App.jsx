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
import MyProfile from './pages/MyProfile'
import Error from './components/Error'

function App() {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    setUserData({ username: 'tickle122', name: "Tom Tickle", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953" })
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
        <Route path='/my-profile' element={<MyProfile setUserData={setUserData} />} />
        <Route path='/*' element={<Error err={err} />} />
      </Routes>
    </UserAccount>
  )
}

export default App
