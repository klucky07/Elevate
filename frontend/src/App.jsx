import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { MainList } from './pages/MainList'
function App() {


  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path='/main' element={<MainList/>}/>
</Routes>

</BrowserRouter>
  
  )
}

export default App
