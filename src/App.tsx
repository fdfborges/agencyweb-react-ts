import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/header';
import { Home } from "./Pages/Home/Home";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Footer } from './components/Footer/Footer';

import './global.css'
import { Newsletter } from './components/Newsletter/Newsletter';


export function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<AboutUs />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>

    </>
  )
}


