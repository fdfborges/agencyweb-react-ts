import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Home } from "./Pages/Home/Home";
import './global.css'
export function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="sobrenos" element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


