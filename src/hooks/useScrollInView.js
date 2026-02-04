import { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { SmoothScrollContext } from '../context/SmoothScrollContext';

// Hook to access Lenis instance
export const useSmoothScroll = () => {
  const lenisRef = useContext(SmoothScrollContext);
  return {
    get lenis() {
      return lenisRef?.current;
    },
  };
};

/**
 * Custom hook that detects when an element enters the viewport
 * Works seamlessly with Lenis smooth scroll by using scroll events
 * instead of IntersectionObserver
 */
export const useScrollInView = (options = {}) => {
  const {
    threshold = 0.3, // How much of the element should be visible (0-1)
    once = true, // Only trigger once
    margin = 0, // Margin around viewport in pixels
  } = options;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const hasTriggeredRef = useRef(false);
  const { lenis } = useSmoothScroll() || {};

  const checkInView = useCallback(() => {
    if (!ref.current) return;
    if (once && hasTriggeredRef.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how much of the element is visible
    const visibleHeight =
      Math.min(rect.bottom, windowHeight - margin) - Math.max(rect.top, margin);
    const elementHeight = rect.height;
    const visibleRatio = Math.max(0, visibleHeight / elementHeight);

    if (visibleRatio >= threshold) {
      setIsInView(true);
      hasTriggeredRef.current = true;
    } else if (!once) {
      setIsInView(false);
    }
  }, [threshold, once, margin]);
  useEffect(() => {
    // Defer initial check to avoid React effect warning
    const timeoutId = setTimeout(checkInView, 0);

    // Use Lenis scroll event if available, otherwise fallback to native scroll
    if (lenis) {
      lenis.on('scroll', checkInView);
      return () => {
        clearTimeout(timeoutId);
        lenis.off('scroll', checkInView);
      };
    } else {
      window.addEventListener('scroll', checkInView, { passive: true });
      window.addEventListener('resize', checkInView, { passive: true });
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', checkInView);
        window.removeEventListener('resize', checkInView);
      };
    }
  }, [lenis, checkInView]);

  return { ref, isInView };
};

export default useScrollInView;
