/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Faculties from './components/Faculties';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent/30 selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Faculties />
        <News />
      </main>
      <Footer />
    </div>
  );
}
