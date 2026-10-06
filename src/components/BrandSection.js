import React from 'react';
import FadeIn from './FadeIn';

const BrandSection = () => (
  <section className="brand-section" id="about">
    <FadeIn direction="up" delay={0}>
      <div className="brand-logo-section">
        <span className="ornament">~❧~</span>
        <span className="the-label">BYRON'S</span>
        <div className="brand-main">
          <span className="salt">MEATS</span>
        </div>
        <div className="bbq-row">
          <span>BULAWAYO</span>
          <span className="bbq-border">BUTCHERY</span>
          <span>ZWE</span>
        </div>
      </div>
    </FadeIn>

    <FadeIn direction="up" delay={0.15}>
      <div className="brand-nav">
        <button className="btn-brand">ORDER MEAT</button>
        <button className="btn-brand">OUR SERVICES</button>
        <button className="btn-brand">DIRECTIONS</button>
        <button className="btn-brand">GALLERY</button>
      </div>
    </FadeIn>

    <FadeIn direction="up" delay={0.25}>
      <p className="brand-description">
        We are delighted to share our world-class butchery with you — with a side of
        Bulawayo hospitality. Byron's is a fully-fledged butchery selling an
        arrangement of good cuts of meat, spices, jams, sauces and pickles. All our
        beef is farmed by us on our own farm in Figtree. We believe in great service,
        friendly staff and meat that speaks for itself.
      </p>
    </FadeIn>
  </section>
);

export default BrandSection;
