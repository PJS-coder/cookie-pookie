'use client';
import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Respect user's reduced motion setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsHidden(true);
      return;
    }

    const duration = 2200; // ~2.2 seconds total load time
    const startTime = performance.now();

    let animationFrameId;

    const animateProgress = (now) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsLoaded(true);
          // Unmount after the smooth slide up completes
          setTimeout(() => {
            setIsHidden(true);
          }, 800);
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSkip = () => {
    setIsLoaded(true);
    setTimeout(() => setIsHidden(true), 800);
  };

  if (isHidden) return null;

  return (
    <aside 
      className={`cp-preloader ${isLoaded ? 'cp-preloader-exit-up' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading CookiePookie"
      onClick={handleSkip}
      title="Tap to continue"
    >
      <div className="cp-loader-content">
        {/* Only Loader Logo */}
        <div className="cp-loader-graphic-wrap">
          <img 
            src="/assets/loader.png" 
            alt="CookiePookie" 
            className="cp-loader-main-img"
          />
        </div>

        {/* Only Loader Progress Bar */}
        <div className="cp-loader-progress-box">
          <div className="cp-loader-track">
            <div 
              className="cp-loader-bar" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
