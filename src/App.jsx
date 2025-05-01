import Header from './components/Header'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Gallerypage from './pages/Gallerypage'
import Contactpage from './pages/Contactpage'
import Aboutpage from './pages/Aboutpage'
import Notfound from './pages/Notfound'


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/gallery' element={<Gallerypage />} />
      <Route path='/contact' element={<Contactpage />} />
      <Route path='/about' element={<Aboutpage />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

