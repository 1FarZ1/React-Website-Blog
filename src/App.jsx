import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/home'
import Footer from './components/footer'
import About from './components/About'
import Lobby from './components/Lobby'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import BlogDetaills from './components/Blog_detaills'
import Page404 from './components/404'

export default function App() {
 
  return (
   <div className='Container'>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  exact  element={<About/>}/>
        <Route path="/lobby" exact element={<Lobby/>}/>
        <Route path="/Blog-Detaills/:id" exact element={<BlogDetaills/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
      <Footer/>
    </Router>
   </div>
  )
}


