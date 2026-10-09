'use client';
import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsHidden(true);
      return;
    }

    // Display time ~1.6 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setIsHidden(true);
      }, 650);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    if (isLoaded) return;
    setIsLoaded(true);
    setTimeout(() => setIsHidden(true), 500);
  };

  if (isHidden) return null;

  return (
    <aside
      className={`cp-pro-loader ${isLoaded ? 'cp-pro-loader-exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="CookiePookie Loading"
      onClick={handleSkip}
    >
      <div className="cp-logo-loader-container">
        <div className="cp-logo-glow-halo" />
        <div className="cp-pro-logo-stage">
          <img
            src="/assets/cookiepookie-logo.png"
            alt="CookiePookie"
            className="cp-pro-logo-img"
          />
        </div>
        <div className="cp-loader-tagline">A LITTLE INDULGENCE. A LOT OF JOY.</div>
      </div>
    </aside>
  );
}

