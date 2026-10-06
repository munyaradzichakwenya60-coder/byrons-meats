import React, { useState, useEffect } from 'react';

// Using direct Unsplash source URLs — reliable, no CORS issues
const slides = [
  {
    bg: 'https://ourbyo.co.zw/wp-content/uploads/2020/08/Byrons-Meats-Bulawayo.jpg',
    headline1: "YOU CAN'T BEAT",
    headline2: 'MY MEAT',
    sub: 'ORDER ONLINE TODAY',
    buttons: [
      { label: 'SHOP BEEF',   outline: false },
      { label: 'SHOP PORK',   outline: false },
      { label: 'SHOP ALL',    outline: true  },
    ],
  },
  {
    bg: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1600&q=85',
    headline1: 'FROM OUR FARM',
    headline2: 'TO YOUR TABLE',
    sub: 'FARMED IN FIGTREE   ZIMBABWE',
    buttons: [
      { label: 'ORDER NOW',  outline: false },
      { label: 'SEE MENU',   outline: true  },
    ],
  },
  {
    bg: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=85',
    headline1: 'FRESH CUTS',
    headline2: 'EVERY DAY',
    sub: 'BEEF   PORK   LAMB   CHICKEN   VENISON',
    buttons: [
      { label: 'SHOP VENISON', outline: false },
      { label: 'SHOP LAMB',    outline: true  },
    ],
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-slider" id="home">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? ' active' : ''}`}
          style={{ backgroundImage: `url("${slide.bg}")` }}
        >
          <div className="hero-content">
            <h1>{slide.headline1}<br />{slide.headline2}</h1>
            <h2>{slide.sub}</h2>
            <div className="hero-buttons">
              {slide.buttons.map(btn => (
                <button
                  key={btn.label}
                  className={`btn-hero${btn.outline ? ' outline' : ''}`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
