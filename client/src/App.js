import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layouts/Header.jsx'
import Navbar from './components/layouts/Navbar.jsx'
import Footer from './components/layouts/Footer.jsx'
import AddArticle from './components/layouts/AddArticle.jsx'
import Articles from './components/Articles.jsx'
import Article from './components/layouts/Article.jsx'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5775/articles')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route path="/" exact render={() => <Articles posts={posts} />} />
      <Route
        path="/article/:id"
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
      <Footer />
    </div>
  )
}

export default App
