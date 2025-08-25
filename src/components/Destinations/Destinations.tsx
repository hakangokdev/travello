'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY } from '@/constants';
import styles from './Destinations.module.css';

interface Destination {
  id: string;
  name: string;
  image: string;
}

interface DestinationsProps {
  className?: string;
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Indonesia',
    image: '/images/indonesia.png',
  },
  {
    id: '2',
    name: 'Santorini',
    image: '/images/santorini.png',
  },
  {
    id: '3',
    name: 'Amazon',
    image: '/images/amazon.png',
  },
];

export const Destinations: React.FC<DestinationsProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : destinations.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < destinations.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className={`${styles.destinations} ${className || ''}`}>
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Destinations You Shouldn't Miss
          </h2>
          
          <p className={styles.description}>
            Choose Your Destination and Contact Our Experts for the Best Deals!
          </p>
          
          {/* Navigation Arrows */}
          <div className={styles.navigation}>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrevious}
              aria-label="Previous destination"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M15 18L9 12L15 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="Next destination"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M9 18L15 12L9 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Destinations Holder */}
        <div className={styles.destinationsHolder}>
          {destinations.map((destination, index) => (
            <div 
              key={destination.id}
              className={`${styles.destinationCard} ${
                index === currentIndex ? styles.active : ''
              }`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={217}
                  height={353}
                  className={styles.destinationImage}
                />
                <div className={styles.overlay} />
              </div>
              
              <h3 className={styles.destinationName}>
                {destination.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;