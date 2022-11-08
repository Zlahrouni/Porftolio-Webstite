import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Container 
import Home  from './container/Home/Home'
import About from './container/About/About'
import Portfolio from './container/Portfolio/Portfolio'
import Contact from './container/Contact/Contact'


//Components
import { Navbar } from './components'

//Style
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      {/*
      <Home/>
      <About/>
      <Portfolio/>
      <Footer/>
      */}
    </div>
  )
}

export default App