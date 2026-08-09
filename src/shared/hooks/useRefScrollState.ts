import { useCallback, useEffect, useRef } from 'react';
import { setDataAttr } from '@/shared/lib/setDataAttr';
import { verticalScrollDirection } from '@/shared/lib/verticalScrollDirection';
import { useOnScroll } from '@/shared/hooks/useOnScroll';

export const useRefScrollState = () => {
  const ref = useRef<HTMLElement | null>(null);
  const lastY = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const currentY = window.scrollY;
    const direction = verticalScrollDirection(lastY?.current);
    const scrolled = currentY > 0;
    lastY.current = currentY;

    setDataAttr(ref.current, 'scrolled', scrolled);
    if (direction) {
      setDataAttr(ref.current, 'scrollDirection', direction);
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    lastY.current = window.scrollY;
    handleScroll();
  }, [handleScroll]);

  useOnScroll(handleScroll);

  return { ref };
};