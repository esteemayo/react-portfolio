import { useState } from 'react';

import Menu from 'components/menu/Menu';
import Intro from 'components/intro/Intro';
import Works from 'components/works/Works';
import Navbar from 'components/navbar/Navbar';
import Contact from 'components/contact/Contact';
import Portfolio from 'components/portfolio/Portfolio';
import Testimonials from 'components/testimonials/Testimonials';

import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='app'>
      <Navbar menuOpen={menuOpen} onToggle={toggleMenu} />
      <Menu menuOpen={menuOpen} onToggle={toggleMenu} />
      <div className='app__sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
