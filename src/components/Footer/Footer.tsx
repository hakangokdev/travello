'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY } from '@/constants';
import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

const instagramImages = [
  '/images/instagram-1.png',
  '/images/instagram-2.png',
  '/images/instagram-3.png',
  '/images/instagram-4.png',
  '/images/instagram-5.png',
  '/images/instagram-6.png',
];

const footerLinks = {
  stayConnected: [
    { label: 'Facebook', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  travello: [
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Destinations', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Blog', href: '#' },
  ],
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      {/* Banner Section */}
      <div className={styles.bannerSection}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>
              Ready to explore the world with us?
            </h2>
            <p className={styles.bannerDescription}>
              Join thousands of travelers who trust Travello for their adventures
            </p>
            <button className={styles.bannerButton}>
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Stay Connected */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Stay Connected</h3>
              <ul className={styles.linkList}>
                {footerLinks.stayConnected.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travello Links */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Travello</h3>
              <ul className={styles.linkList}>
                {footerLinks.travello.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instagram Gallery */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Instagram</h3>
              <div className={styles.instagramGrid}>
                {instagramImages.map((image, index) => (
                  <div key={index} className={styles.instagramItem}>
                    <Image
                      src={image}
                      alt={`Instagram post ${index + 1}`}
                      width={80}
                      height={80}
                      className={styles.instagramImage}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Newsletter</h3>
              <p className={styles.newsletterDescription}>
                Subscribe to get updates on new destinations and travel tips
              </p>
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <div className={styles.container}>
          <p className={styles.copyrightText}>
            © 2025 Travello. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;