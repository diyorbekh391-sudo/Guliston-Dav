/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Faculties from './components/Faculties';
import News from './components/News';
import Map from './components/Map';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen selection:bg-accent/30 selection:text-secondary ${isDarkMode ? 'dark bg-[#001a35]' : 'bg-white'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <News />
        <About />
        <Faculties />
        <Stats />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
