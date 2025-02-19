import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import UserAccount from './components/UserAccount'
import Header from './components/Header'
import Home from './pages/Home'
import Article from './pages/Article'
import Topics from './pages/Topics'
import Topic from './pages/Topic'

function App() {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    setUserData({ username: 'tickle122' })
  }, [])
  return (
    <UserAccount userData={userData}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<Article />} />
        <Route path='/topics/' element={<Topics />} />
        <Route path='/topics/:topic_name' element={<Topic />} />
      </Routes>
    </UserAccount>
  )
}

export default App
