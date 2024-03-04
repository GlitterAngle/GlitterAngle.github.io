import { useState, useRef} from 'react'
// import Nav from './components/nav/Nav'
import Landing from './pages/landing/Landing'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
    {/* <Nav/> */}
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </>
  )
}

export default App
