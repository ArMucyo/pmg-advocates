import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Attorneys />
      <Contact />
      <Footer />
    </main>
  )
}

