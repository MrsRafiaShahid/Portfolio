import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, ErrorPage, Home, Projects } from './Pages'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>

        <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    
    </>
  )
}

export default Routing