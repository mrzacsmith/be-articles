import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layouts/Header.jsx'
import Navbar from './components/layouts/Navbar.jsx'
import Footer from './components/layouts/Footer.jsx'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
