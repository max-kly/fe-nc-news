import { useEffect, useState } from 'react'
import { Routes, Route, data } from 'react-router'
import UserAccount from './components/UserAccount'
import Header from './components/Header'
import Home from './pages/Home'
import Article from './pages/Article'
import Topics from './pages/Topics'
import Topic from './pages/Topic'
import NewArticle from './pages/NewArticle'
import NewTopic from './pages/NewTopic'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import Error from './components/Error'
function App() {
  const err = { msg: 'Page you are looking for is not found' }
  return (
    <UserAccount>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<Article />} />
        <Route path='/topics/' element={<Topics />} />
        <Route path='/topics/:topic' element={<Topic />} />
        <Route path='topics/new-topic' element={<NewTopic />} />
        <Route path='/articles/new-article' element={<NewArticle />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Error err={err} />} />
      </Routes>
    </UserAccount>
  )
}

export default App
