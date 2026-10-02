'use client';
import {useEffect, useLayoutEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import Lenis from 'lenis';

function hasSectionAnchor(url){
  if(!url.hash) return false;
  try {
    return Boolean(document.getElementById(decodeURIComponent(url.hash.slice(1))));
  } catch {
    return false;
  }
}

export default function ScrollReset(){
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.35, // Buttery smooth momentum
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85, // Gentle, relaxing scroll speed
      touchMultiplier: 1.2,
      infinite: false
    });

    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    if (hasSectionAnchor(new URL(window.location.href))) return;
    
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {immediate: true});
    } else {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    }
  }, [pathname]);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const onClick = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href]');
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      if (url.hash) {
        const targetId = decodeURIComponent(url.hash.slice(1));
        const targetElement = document.getElementById(targetId);
        if (targetElement && lenisRef.current) {
          event.preventDefault();
          lenisRef.current.scrollTo(targetElement, {offset: -90, duration: 1.4});
          window.history.pushState(null, '', url.hash);
          return;
        }
      }

      if (url.pathname === window.location.pathname && !hasSectionAnchor(url)) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, {duration: 1.2});
        } else {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
      }
    };

    const onHistory = () => {
      if (!hasSectionAnchor(new URL(window.location.href))) {
        if (lenisRef.current) lenisRef.current.scrollTo(0, {immediate: true});
        else window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }
    };

    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onHistory);

    return () => {
      window.history.scrollRestoration = previous;
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onHistory);
    };
  }, []);

  return null;
}
