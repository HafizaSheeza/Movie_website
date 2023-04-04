import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleMOvie from './Components/SingleMovie'
// import Error from './Components/Navbar'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='singlemovie/:id' element={<SingleMOvie />} />
          {/* <Route exact path='*' element={<Error />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
