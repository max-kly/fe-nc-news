import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Article from './pages/Article'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:article_id' element={<Article />} />
      </Routes>
    </>

  )
}

export default App
