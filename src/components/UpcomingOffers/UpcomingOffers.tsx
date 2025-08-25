'use client';

import React from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY } from '@/constants';
import styles from './UpcomingOffers.module.css';

interface Destination {
  id: string;
  name: string;
  image: string;
  label: string;
  labelType: 'chill' | 'relax';
  duration: string;
  date: string;
  price: string;
}

interface UpcomingOffersProps {
  className?: string;
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Miami Beaches',
    image: '/images/miami-beaches.png',
    label: 'Chill',
    labelType: 'chill',
    duration: '2 Days, 1 Nights',
    date: '20.5.2026',
    price: '850$/Person',
  },
  {
    id: '2',
    name: 'Japan',
    image: '/images/japan.png',
    label: 'Relax',
    labelType: 'relax',
    duration: '2 Days, 1 Nights',
    date: '20.5.2026',
    price: '1200$/Person',
  },
  {
    id: '3',
    name: 'Dubai',
    image: '/images/dubai.png',
    label: 'Chill',
    labelType: 'chill',
    duration: '2 Days, 1 Nights',
    date: '20.5.2026',
    price: '500$/Person',
  },
  {
    id: '4',
    name: 'Taj-Mahal',
    image: '/images/taj-mahal.png',
    label: 'Relax',
    labelType: 'relax',
    duration: '2 Days, 1 Nights',
    date: '20.5.2026',
    price: '350$/Person',
  },
  {
    id: '5',
    name: 'New York',
    image: '/images/new-york.png',
    label: 'Chill',
    labelType: 'chill',
    duration: '2 Days, 1 Nights',
    date: '20.5.2026',
    price: '500$/Person',
  },
  {
    id: '6',
    name: 'Greece',
    image: '/images/greece.png',
    label: 'Relax',
    labelType: 'relax',
    duration: '2 Days, 1 Nights',
    date: '20.5.2026',
    price: '950$/Person',
  },
];

export const UpcomingOffers: React.FC<UpcomingOffersProps> = ({ className }) => {
  const handleBookNow = (destination: Destination) => {
    console.log(`Booking ${destination.name}`);
    // Handle booking logic here
  };

  return (
    <section className={`${styles.upcomingOffers} ${className || ''}`}>
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Upcoming Offers</h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {destinations.map((destination) => (
            <div key={destination.id} className={styles.card}>
              {/* Destination Name */}
              <h3 className={styles.destinationName}>{destination.name}</h3>

              {/* Destination Image */}
              <div className={styles.imageContainer}>
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={293}
                  height={239}
                  className={styles.destinationImage}
                />
              </div>

              {/* Info Section */}
              <div className={styles.infoSection}>
                <div className={styles.infoLeft}>
                  <span className={`${styles.label} ${styles[destination.labelType]}`}>
                    {destination.label}
                  </span>
                  <span className={styles.duration}>{destination.duration}</span>
                  <span className={styles.date}>{destination.date}</span>
                </div>
              </div>

              {/* Price Section */}
              <div className={styles.priceSection}>
                <span className={styles.price}>{destination.price}</span>
                <button
                  className={styles.bookButton}
                  onClick={() => handleBookNow(destination)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingOffers;