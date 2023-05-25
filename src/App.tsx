import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Header } from './components/Header/header';
import { Home } from "./Pages/Home/Home";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';

import './global.css'




export function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>

    </>
  )
}


