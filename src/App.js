import React from 'react'
import Navbar from "./components/navbar"
import LandingPage from './components/LandingPage'
import Info from './components/info'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carfleet from './components/carfleet';
import BestValued from './components/bestvalued';
import Testimonials from './components/testimonials';
import Footer from './components/Footer'
function App() {
  return (
    <div >
      <Navbar/>
<LandingPage/>
<Info/>
<Carfleet/>
<BestValued/>
<Testimonials/>
<Footer/>
    </div>
  )
}

export default App
