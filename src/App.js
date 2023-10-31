import React from 'react';
import LandingPage from './components/LandingPage';
import Info from './components/info';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carfleet from './components/carfleet';
import BestValued from './components/bestvalued';
import Testimonials from './components/testimonials';
import Footer from './components/Footer';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './images/carconnectemoji.png';
import { Link, Element } from 'react-scroll'; // Import Link and Element from react-scroll

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar bg="red-500" expand="lg" expanded={expanded} className='fixed top-0 flex w-100'>
        <Container>
          <Navbar.Brand >
          <Link to="home"  duration={300} className='flex text-white  hover:cursor-pointer'>   <img src={Logo} alt='a' className='h-[30px] p-0 m-0' />
            CARRENTO</Link>
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='w-full flex gap-4 justify-end flex-wrap '>
              <Link to="info"  duration={300} className='text-white hover:cursor-pointer '>Info</Link>
              <Link to="carfleet"  duration={300} className='text-white hover:cursor-pointer'>Carfleet</Link>
              <Link to="testimonials"  duration={300} className='text-white hover:cursor-pointer '>Testimonials</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Element name="home">
        <LandingPage />
      </Element>
      <Element name="info">
        <Info />
      </Element>
      <Element name="carfleet">
        <Carfleet />
      </Element>
      <Element name="bestvalued">
        <BestValued />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Footer />
     </div>
  );
}

export default App;
