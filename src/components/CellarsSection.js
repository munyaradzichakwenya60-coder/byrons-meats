import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const BG =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85';

const CellarsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section className="cellars-section" ref={ref}>
      {/* Parallax background */}
      <motion.div
        className="cellars-parallax"
        style={{ y, backgroundImage: `url("${BG}")` }}
      />
      <div className="cellars-overlay" />

      <FadeIn direction="left" delay={0.1}>
        <div className="cellars-box">
          <h2>
            FARMED IN
            <br />
            FIGTREE
          </h2>
          <p>
            All our beef is farmed by us on our own farm in Figtree, Zimbabwe.
            From slaughter to processing — we handle it all so you get the
            freshest cuts possible.
          </p>
          <button className="btn-cellars">VISIT US IN BULAWAYO</button>
        </div>
      </FadeIn>
    </section>
  );
};

export default CellarsSection;
