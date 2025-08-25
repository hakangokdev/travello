'use client';

import React from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY } from '@/constants';
import styles from './BlogSection.module.css';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

interface BlogSectionProps {
  className?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'NUSA PENIDA ISLAND GUIDE',
    description: 'The beautiful, exotic Nusa Penida island lies just 25 kilometers from Bali, the most famous tourist destination in Indonesia.',
    image: '/images/blog-nusa-penida-2c3de5.png',
    imagePosition: 'left',
  },
  {
    id: '2',
    title: '17 BEST WATERFALLS IN INDONESIA',
    description: 'Putting together an Indonesia waterfall guide is tough, because there are so many great waterfalls in this country.',
    image: '/images/blog-waterfalls.png',
    imagePosition: 'right',
  },
];

export const BlogSection: React.FC<BlogSectionProps> = ({ className }) => {
  const handleReadMore = (postId: string) => {
    console.log(`Reading more about post ${postId}`);
    // Handle read more logic here
  };

  return (
    <section className={`${styles.blogSection} ${className || ''}`}>
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Read Before You Travel</h2>
        </div>

        {/* Blog Posts */}
        <div className={styles.blogHolder}>
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className={`${styles.blogPost} ${
                post.imagePosition === 'right' ? styles.imageRight : styles.imageLeft
              }`}
            >
              {/* Image */}
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={post.imagePosition === 'left' ? 548 : 542}
                  height={357}
                  className={styles.blogImage}
                />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                
                <p className={styles.description}>{post.description}</p>
                
                <button 
                  className={styles.readMoreButton}
                  onClick={() => handleReadMore(post.id)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
                    <path 
                      d="M9 18L15 12L9 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Read More</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;