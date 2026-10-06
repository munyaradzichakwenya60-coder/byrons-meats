import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Contact',  href: '#contact'  },
];

const Navbar = ({ cartCount = 0 }) => {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Real Logo */}
        <a href="#home" onClick={e => handleNav(e, '#home')} className="navbar-logo-link">
          <img
            src="/byrons-logo.png"
            alt="Byron's Meats Butchery Logo"
            className="navbar-real-logo"
          />
        </a>

        {/* Desktop nav */}
        <ul className="navbar-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#search" aria-label="Search">
              <FiSearch size={15} style={{ verticalAlign: 'middle' }} />
            </a>
          </li>
        </ul>

        {/* Right: cart + hamburger */}
        <div className="navbar-right">
          <div className="navbar-cart">
            <span>CART / $0.00</span>
            <div className="cart-icon">
              <FiShoppingCart />
            </div>
          </div>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    className={activeLink === link.href ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-menu-footer">
              <p>077 604 3013</p>
              <p>byronsmeats@prfe.co.zw</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
