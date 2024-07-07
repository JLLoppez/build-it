import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navigation/navigation';
import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';
import './sass/main.scss';
// import Privacy from './pages/privacy/privacy';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const galleryRef = useRef(null);
  const projectRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="App">
      <NavBar
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        galleryRef={galleryRef}
        projectRef={projectRef}
        toggleSidebar={toggleSidebar}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={ 
            <>
              <Home ref={homeRef} />
              <About ref={aboutRef} />
              <Services ref={servicesRef} />
              <Contact ref={contactRef} />
            </>
          } />
           {/* <Route path="/privacy-policy" component={Privacy} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
