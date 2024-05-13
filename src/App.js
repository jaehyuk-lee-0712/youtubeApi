import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Today from './pages/Today';
import Developoer from './pages/Developoer';
import Webd from './pages/Webd';
import Gsap from './pages/Gsap';
import Website from './pages/Website';
import Port from './pages/Port';
import Video from './pages/Video';
import Youtube from './pages/Youtube';
import Channel from './pages/Channel';
import Search from './pages/Search';
import Not from './pages/Not';




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/today' element={<Today />} />
      <Route path='/developoer' element={<Developoer />} />
      <Route path='/webd' element={<Webd />} />
      <Route path='/website' element={<Website />} />
      <Route path='/gsap' element={<Gsap />} />
      <Route path='/port' element={<Port />} />
      <Route path='/youtube' element={<Youtube />} />
      <Route path='/channel' element={<Channel />} />
      <Route path='/video' element={<Video />} />
      <Route path='/search' element={<Search />} />
      <Route path='/*' element={<Not />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
