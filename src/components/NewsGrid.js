import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from './FadeIn';

const newsItems = [
  {
    day: '23', month: 'DEC',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&h=380&q=80',
    title: 'Festive Season Meat Hampers — Order Now!',
  },
  {
    day: '11', month: 'NOV',
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&h=380&q=80',
    title: "Byron's Meats — Best Butchery in Bulawayo 2024",
  },
  {
    day: '05', month: 'OCT',
    img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&h=380&q=80',
    title: 'New: Meat Processing Courses Now Available',
  },
];

const NewsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="news-section" id="gallery">
      <FadeIn direction="up">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '8px' }}>LATEST NEWS</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Updates from Byron's Meats</p>
      </FadeIn>

      <div className="news-grid" ref={ref}>
        {newsItems.map((item, i) => (
          <motion.div
            className="news-card"
            key={i}
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="news-card-image">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="news-date">
                <span className="day">{item.day}</span>
                <span className="month">{item.month}</span>
              </div>
            </div>
            <div className="news-card-body">
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
