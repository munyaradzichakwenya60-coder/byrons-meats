import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import BrandSection from './components/BrandSection';
import MeatCategories from './components/MeatCategories';
import FlavorBanner from './components/FlavorBanner';
import NewsGrid from './components/NewsGrid';
import CellarsSection from './components/CellarsSection';
import ContactSection from './components/ContactSection';
import BackToTop from './components/BackToTop';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <BrandSection />
      <MeatCategories />
      <FlavorBanner />
      <NewsGrid />
      <CellarsSection />
      <ContactSection />

      <FadeIn direction="up">
        <footer className="footer">
          <p>© 2024 Byron's Meats Butchery — Bulawayo, Zimbabwe</p>
          <div className="footer-links">
            <a href="https://www.facebook.com/Byronsmeats/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="tel:0776043013">077 604 3013</a>
            <a href="mailto:byronsmeats@prfe.co.zw">byronsmeats@prfe.co.zw</a>
          </div>
        </footer>
      </FadeIn>

      <BackToTop />
    </div>
  );
}

export default App;
