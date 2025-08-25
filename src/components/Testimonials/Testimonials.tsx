'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY } from '@/constants';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
}

interface TestimonialsProps {
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Cameron Williamson',
    image: '/images/testimonial-cameron-56586a.png',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es',
  },
  {
    id: '2',
    name: 'Fatima Taylor',
    image: '/images/testimonial-fatima-56586a.png',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
  },
  {
    id: '3',
    name: 'Sara Watson',
    image: '/images/testimonial-sara-56586a.png',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es',
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className={`${styles.testimonialsSection} ${className || ''}`}>
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>What customers say about us</h2>
        </div>

        {/* Testimonial Content */}
        <div className={styles.testimonialContent}>
          {/* Profile Image */}
          <div className={styles.profileImageContainer}>
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              width={120}
              height={120}
              className={styles.profileImage}
            />
          </div>

          {/* Testimonial Text */}
          <div className={styles.textContainer}>
            <p className={styles.testimonialText}>
              "{currentTestimonial.text}"
            </p>
            
            <h3 className={styles.customerName}>
              {currentTestimonial.name}
            </h3>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className={styles.pagination}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ''
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;