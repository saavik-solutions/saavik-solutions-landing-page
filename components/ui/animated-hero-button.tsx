import React from 'react';
import styles from './animated-hero-button.module.css';

export default function AnimatedHeroButton({ text = "Let's Discuss", showIcon = true }: { text?: string, showIcon?: boolean }) {
  return (
    <button type="button" className={styles.button}>
      <span className={styles.fold} />
      <div className={styles.points_wrapper}>
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
        <i className={styles.point} />
      </div>
      <span className={styles.inner}>
        {showIcon && (
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
          </svg>
        )}
        {text}
      </span>
    </button>
  );
}
