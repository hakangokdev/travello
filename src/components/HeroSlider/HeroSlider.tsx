'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY } from '@/constants';
import styles from './HeroSlider.module.css';

interface HeroSliderProps {
  className?: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'flight' | 'hotel'>('flight');

  return (
    <div className={`${styles.heroSlider} ${className || ''}`}>
      {/* Background */}
      <div className={styles.background}>
        <Image
          src="/images/hero-background.png"
          alt="Travel destination"
          fill
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.overlay} />
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Travello</h1>
        </div>
        <nav className={styles.navigation}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Offers</a>
          <a href="#" className={styles.navLink}>E-book</a>
          <a href="#" className={styles.navLink}>Destinations</a>
          <a href="#" className={styles.navLink}>Blog</a>
          <a href="#" className={styles.navLink}>Testimonial</a>
          <a href="#" className={styles.navLink}>Contact Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Hero Text */}
        <div className={styles.heroText}>
          <h2 className={styles.mainTitle}>
            Explore, Dream, Travel
          </h2>
        </div>

        {/* Booking Form */}
        <div className={styles.bookingForm}>
          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'flight' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('flight')}
            >
              <Image
                src="/icon/airplane-icon.svg"
                alt="Flight"
                width={24}
                height={24}
                className={styles.tabIcon}
              />
              <span>Flight</span>
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'hotel' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('hotel')}
            >
              <Image
                src="/icon/building-icon.svg"
                alt="Hotel"
                width={24}
                height={24}
                className={styles.tabIcon}
              />
              <span>Hotel</span>
            </button>
          </div>

          {/* Form Content */}
          <div className={styles.formContent}>
            {/* Location Card */}
            <div className={styles.card}>
              <div className={styles.cardSection}>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>Living From</span>
                  <span className={styles.cardValue}>Dubai</span>
                </div>
                <div className={styles.cardIcon}>
                  <Image
                    src="/icon/airplane-icon.svg"
                    alt="Airplane"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>Going to</span>
                  <span className={styles.cardValue}>Istanbul</span>
                </div>
              </div>
            </div>

            {/* Date Card */}
            <div className={styles.card}>
              <div className={styles.cardSection}>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>Leave</span>
                  <span className={styles.cardValue}>23 Jan, Sat</span>
                </div>
                <div className={styles.cardIcon}>
                  <Image
                    src="/icon/calendar-icon.svg"
                    alt="Calendar"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>Return</span>
                  <span className={styles.cardValue}>14 Jan, Thu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;