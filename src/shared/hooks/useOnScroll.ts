import { useEffect } from 'react';

export const useOnScroll = (callback: () => void) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;
    let rafId = 0;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      rafId = requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [callback]);
};
