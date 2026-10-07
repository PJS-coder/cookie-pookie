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

    // Display time ~2 seconds total
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setIsHidden(true);
      }, 700);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    if (isLoaded) return;
    setIsLoaded(true);
    setTimeout(() => setIsHidden(true), 600);
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
      {/* Main Container */}
      <div className="cp-hand-loader-container">
        {/* Brand Logo (Clean, No Shine) */}
        <div className="cp-pro-logo-stage">
          <img
            src="/assets/cookiepookie-logo.png"
            alt="CookiePookie"
            className="cp-pro-logo-img"
          />
        </div>

        {/* Tapping Hand Animation */}
        <div className="cp-hand-wrapper">
          <div className="cp-tap-hand">
            <div className="cp-tap-finger" />
            <div className="cp-tap-finger" />
            <div className="cp-tap-finger" />
            <div className="cp-tap-finger" />
            <div className="cp-tap-palm" />
            <div className="cp-tap-thumb" />
          </div>
        </div>
      </div>
    </aside>
  );
}
