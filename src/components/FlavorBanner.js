import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

/* Three fallback URLs — browser tries the next src if the previous fails */
const BG =
  'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=85';

const FlavorBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  /* Subtle parallax: image moves slightly slower than scroll */
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section className="flavor-banner" ref={ref}>
      {/* Parallax layer */}
      <motion.div
        className="flavor-banner-parallax"
        style={{
          y,
          backgroundImage: `url("${BG}")`,
        }}
      />
      {/* Dim overlay */}
      <div className="flavor-banner-dim" />

      {/* Content */}
      <div className="flavor-content">
        <FadeIn direction="up" delay={0}>
          <h2>
            A CUT ABOVE
            <br />
            THE REST
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.15}>
          <div className="flavor-buttons">
            <button className="btn-flavor">ORDER MEAT</button>
            <button className="btn-flavor">ORDER SAUCES &amp; SPICES</button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FlavorBanner;
