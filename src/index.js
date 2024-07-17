import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import './style.css'
import Services from './views/services'
import Contact from './views/contact'
import Home from './views/home'
import About from './views/about'
import Gallery from './views/gallery'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
