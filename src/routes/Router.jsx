import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/' element={<Navigate to='/home'/>} />
    </Routes>
    </>
  )
}

export default Router