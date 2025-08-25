'use client';

import React from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY } from '@/constants';
import styles from './BookSection.module.css';

interface BookSectionProps {
  className?: string;
}

export const BookSection: React.FC<BookSectionProps> = ({ className }) => {
  const handleDownloadGuide = () => {
    console.log('Downloading guide book...');
    // Handle download logic here
  };

  return (
    <section className={`${styles.bookSection} ${className || ''}`}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/book-section.png"
            alt="Travel guide book"
            width={615}
            height={615}
            className={styles.bookImage}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Discover the world with us
          </h2>
          
          <p className={styles.description}>
            Would you explore nature paradise in the world, let's find the best destination in world with us, 
            Would you explore nature paradise in the world, let's find the best destination in world with us.
          </p>
          
          <button 
            className={styles.downloadButton}
            onClick={handleDownloadGuide}
          >
            Download Guide Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookSection;