import { useState } from 'react'
import Nav from './components/nav/Nav'
import Landing from './pages/landing/Landing'
import About from './pages/about/About'
import ProjectList from './pages/project_list/ProjectList'
import SingleProject from './pages/single_project/SingleProject'
import Contact from './pages/contact/Contact'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<ProjectList/>}/>
      {/* <Route path="/:id" element={<SingleProject/>}/> */}
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
