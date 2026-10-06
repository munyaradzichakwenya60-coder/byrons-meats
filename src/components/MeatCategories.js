import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const categories = [
  {
    name: 'Beef',
    img: 'https://ourbyo.co.zw/wp-content/uploads/2020/08/Beef.jpg',
    desc: 'All cuts available. Farmed on our own farm in Figtree.',
  },
  {
    name: 'Pork',
    img: 'https://ourbyo.co.zw/wp-content/uploads/2020/08/Pork.jpg',
    desc: 'Fresh pork — ribs, chops, belly and more.',
  },
  {
    name: 'Lamb',
    img: 'https://ourbyo.co.zw/wp-content/uploads/2020/08/Lamb.jpg',
    desc: 'Tender lamb — chops, leg, shoulder and rack.',
  },
  {
    name: 'Chicken',
    img: 'https://ourbyo.co.zw/wp-content/uploads/2020/08/Chicken.jpg',
    desc: 'Locally sourced fresh chicken, whole or portioned.',
  },
  {
    name: 'Venison',
    img: 'https://ourbyo.co.zw/wp-content/uploads/2020/08/Venison.jpg',
    desc: 'Game meat processing. Slaughter to table service.',
  },
];

const MeatCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="meat-categories" id="services">
      <FadeIn direction="up">
        <h2 className="section-title">A CUT ABOVE THE REST</h2>
        <p className="section-subtitle">Beef · Pork · Lamb · Chicken · Venison</p>
      </FadeIn>

      <div className="categories-grid" ref={ref}>
        {categories.map((cat, i) => (
          <motion.div
            className="category-card"
            key={cat.name}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="category-img-wrap">
              <img src={cat.img} alt={cat.name} loading="lazy" />
              <div className="category-overlay">
                <button className="btn-hero">ORDER {cat.name.toUpperCase()}</button>
              </div>
            </div>
            <div className="category-body">
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeatCategories;
